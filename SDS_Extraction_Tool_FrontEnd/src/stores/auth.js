import { defineStore } from 'pinia';
import { urls } from '../config/urls';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: !!localStorage.getItem('loggedIn'),

        // new state for cooldown:
        attempts: Number(localStorage.getItem('loginAttempts') || 0),
        lockoutUntil: Number(localStorage.getItem('lockoutUntil') || 0),
    }),
    getters: {
        isLockedOut: (state) => Date.now() < state.lockoutUntil,
        secondsLeft: (state) => state.lockoutUntil > Date.now() ? Math.ceil((state.lockoutUntil - Date.now()) / 1000) : 0, // Math that calculates seconds
    },
    actions: {
        async login(enteredUsername, enteredPassword) {
            const NOW = Date.now();
            const MAX_ATTEMPTS = 5;
            const COOLDOWN_MS = 60_000; // 1 minute

            // If we’re still locked out, reject immediately
            if (this.lockoutUntil > NOW) {
                return false;
            }

            // Simply do not allow if username and password are not entered
            if (!enteredUsername, !enteredPassword) {
                return false;
            }

            // Check credentials
            try {
                const url = urls.api.base + urls.api.login;
                const body = {
                    username: enteredUsername,
                    password: enteredPassword
                }
                const result = await axios.post(url, body);

                if (result.isValid == undefined || result.isValid == null) {
                    throw new Error('Failed to get response.');
                }

                if (result.isValid == true) {
                    // success: reset attempts/lockout
                    this.isAuthenticated = true;
                    localStorage.setItem('loggedIn', 'true');

                    this.attempts = 0;
                    this.lockoutUntil = 0;
                    localStorage.removeItem('loginAttempts');
                    localStorage.removeItem('lockoutUntil');

                    return true;
                }

                // failure: increment attempts
                this.attempts++;
                localStorage.setItem('loginAttempts', this.attempts);

                // if threshold reached, set a 1-minute lockout
                if (this.attempts >= MAX_ATTEMPTS) {
                    this.lockoutUntil = NOW + COOLDOWN_MS;
                    localStorage.setItem('lockoutUntil', this.lockoutUntil);
                }

                return false;
            } catch (error) {
                alert(error);
                return false;
            }
        },

        logout() {
            this.isAuthenticated = false;
            localStorage.removeItem('loggedIn');
        },
    },
});
