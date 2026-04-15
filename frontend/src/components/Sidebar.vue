<template>
  <div class="w-64 h-screen bg-gray-900 text-white p-5">
    <h2 class="text-xl font-bold mb-6">Admin Panel</h2>

    <router-link to="/dashboard" class="block mb-3 hover:text-gray-300">
      Dashboard
    </router-link>

    <router-link to="/profile" class="block mb-3 hover:text-gray-300">
      Profile
    </router-link>

    <router-link
      v-if="user?.role === 'admin' || user?.role === 'manager'"
      to="/users"
      class="block mb-3 hover:text-gray-300"
    >
      Users
    </router-link>

    <button @click="logoutUser" class="mt-6 text-red-400">
      Logout
    </button>
  </div>
</template>

<script>
import { authState, logout } from "../store/auth";

export default {
  setup() {
    const logoutUser = () => {
      logout();
      window.location.href = "/";
    };

    return {
      user: authState.user,
      logoutUser,
    };
  },
};
</script>