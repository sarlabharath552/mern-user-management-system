<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">

    <div class="bg-white p-8 rounded-2xl shadow-2xl w-96 transform transition duration-500 hover:scale-105">
      
      <h2 class="text-3xl font-bold text-center mb-6 text-gray-800">
        Welcome Back 👋
      </h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
        
        <!-- Email -->
        <div class="relative">
          <input
            v-model="email"
            type="email"
            required
            class="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Email"
          />
        </div>

        <!-- Password -->
        <div class="relative">
          <input
            v-model="password"
            type="password"
            required
            class="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Password"
          />
        </div>

        <!-- Button -->
        <button
          class="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>

      </form>

      <p class="text-center text-sm text-gray-500 mt-4">
        Secure access to your dashboard
      </p>
    </div>
  </div>
</template>

<script>
import API from "../api/axios";
import { setAuth } from "../store/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const res = await API.post("/auth/login", {
          email: this.email,
          password: this.password,
        });

        setAuth(res.data);
        this.$router.push("/dashboard");
      } catch (err) {
        alert(err.response?.data?.message || "Login failed");
      }
    },
  },
};
</script>