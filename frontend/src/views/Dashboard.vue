<template>
  <div class="flex h-screen bg-gray-100">

    <!-- Sidebar -->
    <div class="w-64 bg-gray-900 text-white p-6">
      <h2 class="text-2xl font-bold mb-8">🚀 Admin</h2>

      <router-link to="/dashboard" class="block mb-4 hover:text-gray-300">
        Dashboard
      </router-link>

      <router-link to="/profile" class="block mb-4 hover:text-gray-300">
        Profile
      </router-link>

      <router-link to="/users" class="block mb-4 hover:text-gray-300">
        Users
      </router-link>
    </div>

    <!-- Main -->
    <div class="flex-1">

      <!-- Navbar -->
      <div class="bg-white shadow p-4 flex justify-between">
        <h1 class="text-xl font-semibold">Dashboard</h1>
        <p>{{ user.name }}</p>
      </div>

      <!-- Content -->
      <div class="p-6 grid grid-cols-3 gap-6">

        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-gray-500">Total Users</h3>
          <p class="text-2xl font-bold">120</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-gray-500">Active</h3>
          <p class="text-2xl font-bold text-green-500">100</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-gray-500">Inactive</h3>
          <p class="text-2xl font-bold text-red-500">20</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { authState } from "../store/auth";

export default {
  setup() {
    return { user: authState.user };
  },
};
</script>