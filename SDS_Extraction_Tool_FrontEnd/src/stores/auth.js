import { defineStore } from 'pinia';
import bcrypt from 'bcryptjs';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: !!localStorage.getItem('loggedIn'),

        // new state for cooldown:
        attempts: Number(localStorage.getItem('loginAttempts') || 0),
        lockoutUntil: Number(localStorage.getItem('lockoutUntil') || 0),
    }),
    getters: {
        isLockedOut: (state) => Date.now() < state.lockoutUntil,
        secondsLeft: (state) => state.lockoutUntil > Date.now() ? Math.ceil(state.lockoutUntil - Date.now() / 1000) : 0, // Math that calculates seconds
    },
    actions: {
        login(enteredUsername, enteredPassword) {
            const FIXED_USER = 'isura';
            const FIXED_HASH = '$2y$10$E6eHYJ/GUYjLLItm6MlSCOZcZz5QeNuAqKctI1ONXUKMs/wHK2bNq';
            const NOW = Date.now();
            const MAX_ATTEMPTS = 5;
            const COOLDOWN_MS = 60_000; // 1 minute

            // If we’re still locked out, reject immediately
            if (this.lockoutUntil > NOW) {
                return false;
            }

            // Check credentials
            if (
                enteredUsername === FIXED_USER &&
                bcrypt.compareSync(enteredPassword, FIXED_HASH)
            ) {
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
        },

        logout() {
            this.isAuthenticated = false;
            localStorage.removeItem('loggedIn');
        },
    },
});
