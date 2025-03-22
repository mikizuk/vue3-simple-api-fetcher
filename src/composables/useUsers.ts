import { useUserStore } from '../stores/userStore'
import { useErrorHandler } from './useErrorHandler'

export function useUsers() {
  const userStore = useUserStore()
  const { handleError, simulateError } = useErrorHandler()

  const fetchUsers = async () => {
    userStore.setLoading(true)
    userStore.setError(null)

    try {
      simulateError()

      const response = await fetch(`${import.meta.env.VITE_BASE_URL}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      userStore.setUsers(data)
    } catch (error) {
      const handledError = handleError(error)
      userStore.setError(handledError.message)
      console.error('Error fetching users:', handledError)
    } finally {
      userStore.setLoading(false)
    }
  }

  return {
    fetchUsers,
  }
}
