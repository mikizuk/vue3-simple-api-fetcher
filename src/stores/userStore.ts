import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
  email: string
  username: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    setUsers(users: User[]) {
      this.users = users
    },
    setLoading(loading: boolean) {
      this.loading = loading
    },
    setError(error: string | null) {
      this.error = error
    },
  },
})
