<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const auth=useAuthStore(); // Use the authentication storage
const router = useRouter();
const username = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);

const handleSubmit = async () => {
    loading.value = true;
    error.value = "";
    if (auth.login(username.value, password.value)) {
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
                <input id="username" type="text" v-model="username" required />
            </div>
            <div>
                <label for="password">password:</label>
                <input id="password" type="text" v-model="password" required />
            </div>
            <button type="submit" :disabled="loading">
                {{ loading ? "Logging in..." : "Login" }}
            </button>
            <p v-if="error" class="error">{{ error }}</p>
        </form>
    </div>
</template>
