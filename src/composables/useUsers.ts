import { useUserStore } from '../stores/userStore'

export function useUsers() {
  const userStore = useUserStore()

  const fetchUsers = async () => {
    userStore.setLoading(true)
    userStore.setError(null)

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
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
