<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore(); // Use the authentication storage
const router = useRouter();
const username = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);

const handleSubmit = async () => {
    loading.value = true;
    error.value = "";
    if (await auth.login(username.value, password.value)) {
        router.push("/");
    } else {
        error.value = "Invalid credentials";
        loading.value = false;
    }
}
</script>

<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="username">Username:</label>
                <input id="username" type="text" v-model="username" autocomplete="off" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input id="password" type="password" v-model="password" autocomplete="off" required />
            </div>
            <button type="submit" :disabled="auth.isLockedOut || loading">
                {{ loading ? "Logging in..." : "Login" }}
            </button>
            <p v-if="auth.isLockedOut" class="error">Too many attempts. Try again in {{ auth.secondsLeft }} seconds.</p>
            <p v-if="error" class="error">{{ error }}</p>
        </form>
    </div>
</template>

<style scoped>
.login-container {
    width: 100%;
    max-width: 300px;
    margin-top: auto;
    margin-bottom: auto;
    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid white;
    border-radius: 5px;;
}

h2 {
    text-align: center;
}

* {
    width: 100%;
    margin-top: 10px;
}

button {
    color: white;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    min-height: 30px;
}

.error {
    color: red;
    text-align: center;
}
</style>
