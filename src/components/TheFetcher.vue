<script setup lang="ts">
import { onMounted } from 'vue'
import { useUsers } from '@/composables/useUsers'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const { fetchUsers } = useUsers()

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <button class="button" @click="fetchUsers">Fetch Users (40% success chance)</button>
  <h1>Users List</h1>

  <div v-if="userStore.loading" class="loading">Loading users...</div>

  <div v-else-if="userStore.error" class="error">
    {{ userStore.error }}
  </div>

  <div v-else class="users__list">
    <div v-for="user in userStore.users" :key="user.id" class="users__item">
      <h3>{{ user.name }}</h3>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
  </div>
</template>

<style scoped>
.button {
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
}

.button:hover {
  color: var(--success-bg);
  background-color: var(--active);
}

.button:focus {
  box-shadow: 0 0 0 4px var(--active);
}

.loading,
.error {
  text-align: center;
  padding: 20px;
}

.users__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.users__item {
  background-color: var(--bg-color);
  border: 1px solid var(--active);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
