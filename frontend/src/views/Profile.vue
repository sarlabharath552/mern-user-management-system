<template>
  <div>
    <h2>My Profile</h2>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Role: {{ user.role }}</p>
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