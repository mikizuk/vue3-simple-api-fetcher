<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  message: string
  type: 'success' | 'error'
  show: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <Teleport to="body">
    <div v-if="show" :class="['toast', type]">
      {{ message }}
      <button class="toast__close" @click="$emit('close')">&times;</button>
    </div>
  </Teleport>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 50px;
  right: 20px;
  padding: 12px 24px;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  max-width: 350px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: slideIn 0.3s ease-out;
}

.toast.success {
  background-color: var(--success-bg);
}

.toast.error {
  background-color: var(--error-bg);
}

.toast__close {
  background: none;
  border: none;
  color: white;
  margin-left: 12px;
  padding: 0 4px;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 0;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
