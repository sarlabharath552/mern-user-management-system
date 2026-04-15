<template>
  <div class="flex h-screen bg-gray-100">
    
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-1">
      <Navbar />

      <div class="p-6">

        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold">User Management</h2>

          <input
            v-model="search"
            @input="fetchUsers"
            placeholder="Search users..."
            class="border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        <!-- Loading -->
        <div v-if="loading" class="text-center py-10 text-gray-500">
          Loading users...
        </div>

        <!-- Table -->
        <div v-else class="bg-white rounded-xl shadow overflow-hidden">
          <table class="w-full text-left">
            <thead class="bg-gray-50 text-gray-600 text-sm uppercase">
              <tr>
                <th class="p-4">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="user in users"
                :key="user._id"
                class="border-t hover:bg-gray-50 transition"
              >
                <td class="p-4 font-medium">{{ user.name }}</td>
                <td>{{ user.email }}</td>

                <td>
                  <span
                    class="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-600"
                  >
                    {{ user.role }}
                  </span>
                </td>

                <td>
                  <span
                    :class="user.status === 'active'
                      ? 'text-green-600'
                      : 'text-red-500'"
                  >
                    {{ user.status }}
                  </span>
                </td>

                <td class="text-center space-x-2">
                  <button
                    @click="editUser(user)"
                    class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    @click="confirmDelete(user._id)"
                    class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="mt-6 flex justify-end space-x-3">
          <button
            @click="prevPage"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Prev
          </button>

          <button
            @click="nextPage"
            class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import API from "../api/axios";
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import { useToast } from "vue-toastification";

export default {
  components: { Sidebar, Navbar },

  data() {
    return {
      users: [],
      search: "",
      page: 1,
      loading: false,
    };
  },

  methods: {
    async fetchUsers() {
      this.loading = true;

      try {
        const res = await API.get(
          `/users?search=${this.search}&page=${this.page}`
        );
        this.users = res.data.users;
      } catch (err) {
        this.toast.error("Failed to fetch users ❌");
      } finally {
        this.loading = false;
      }
    },

    async editUser(user) {
      const name = prompt("Update name:", user.name);
      if (!name) return;

      try {
        await API.put(`/users/${user._id}`, { name });
        this.toast.success("User updated ✅");
        this.fetchUsers();
      } catch {
        this.toast.error("Update failed ❌");
      }
    },

    confirmDelete(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.deleteUser(id);
      }
    },

    async deleteUser(id) {
      try {
        await API.delete(`/users/${id}`);
        this.toast.success("User deleted 🚀");
        this.fetchUsers();
      } catch {
        this.toast.error("Delete failed ❌");
      }
    },

    nextPage() {
      this.page++;
      this.fetchUsers();
    },

    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.fetchUsers();
      }
    },
  },

  mounted() {
    this.toast = useToast();
    this.fetchUsers();
  },
};
</script>