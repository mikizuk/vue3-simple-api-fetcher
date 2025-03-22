import { useUserStore } from '../stores/userStore'

export function useUsers() {
  const userStore = useUserStore()

  const simulateError = () => {
    const shouldError = Math.random() < 0.3
    if (shouldError) {
      const errors = [
        { status: 404, message: 'Users not found' },
        { status: 500, message: 'Internal server error' },
        { status: 503, message: 'Service temporarily unavailable' },
      ]
      const randomError = errors[Math.floor(Math.random() * errors.length)]
      throw new Error(`HTTP error! status: ${randomError.status} - ${randomError.message}`)
    }
  }

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
      userStore.setError('Failed to fetch users')
      console.error('Error fetching users:', error)
    } finally {
      userStore.setLoading(false)
    }
  }

  return {
    fetchUsers,
  }
}
