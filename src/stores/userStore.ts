import type { Toast, User } from '@/types/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const toast = ref<Toast>({
    show: false,
    message: '',
    type: 'success',
  })

  function setUsers(newUsers: User[]) {
    users.value = newUsers
    showToast('Users loaded successfully', 'success')
  }

  function setLoading(isLoading: boolean) {
    loading.value = isLoading
  }

  function setError(newError: string | null) {
    error.value = newError
    if (newError) {
      showToast(newError, 'error')
    }
  }

  function showToast(message: string, type: 'success' | 'error') {
    toast.value = {
      show: true,
      message,
      type,
    }
    setTimeout(() => {
      hideToast()
    }, 5000)
  }

  function hideToast() {
    toast.value.show = false
  }

  return {
    users,
    loading,
    error,
    toast,
    setUsers,
    setLoading,
    setError,
    showToast,
    hideToast,
  }
})
