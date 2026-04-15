<template>
  <div class="bg-white shadow p-4 flex justify-between">
    <h1 class="text-lg font-semibold">Dashboard</h1>
    <p>{{ user?.name }}</p>
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