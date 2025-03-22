export interface ErrorState {
  message: string
  details?: unknown
}

export interface ErrorScenario {
  code: number
  message: string
}

export interface User {
  id: number
  name: string
  email: string
  username: string
}

export interface Toast {
  show: boolean
  message: string
  type: 'success' | 'error'
}
