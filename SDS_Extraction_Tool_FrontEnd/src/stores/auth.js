import { defineStore } from 'pinia';
import bcrypt from 'bcryptjs';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: !!localStorage.getItem('loggedIn'),
    }),
    actions: {
        login(enteredUsername, enteredPassword) {
            const FIXED_USER = 'isura';
            const FIXED_HASH = '$2y$10$E6eHYJ/GUYjLLItm6MlSCOZcZz5QeNuAqKctI1ONXUKMs/wHK2bNq'; // your bcrypt hash

            if (
                enteredUsername === FIXED_USER &&
                bcrypt.compareSync(enteredPassword, FIXED_HASH)
            ) {
                this.isAuthenticated = true;
                localStorage.setItem('loggedIn', 'true');
                return true;
            }
            return false;
        },
        logout() {
            this.isAuthenticated = false;
            localStorage.removeItem('loggedIn');
        },
    },
});