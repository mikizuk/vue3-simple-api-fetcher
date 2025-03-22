import type { ErrorScenario, ErrorState } from '@/types/types'
import { ref } from 'vue'

export function useErrorHandler() {
  const error = ref<ErrorState | null>(null)

  const errorScenarios: ErrorScenario[] = [
    { code: 400, message: 'Bad Request - Invalid parameters' },
    { code: 401, message: 'Unauthorized - Please login again' },
    { code: 403, message: 'Forbidden - Insufficient permissions' },
    { code: 404, message: 'Not Found - Resource does not exist' },
    { code: 429, message: 'Too Many Requests - Please try again later' },
    { code: 500, message: 'Internal Server Error' },
    { code: 503, message: 'Service Unavailable - Try again later' },
  ]

  function simulateError() {
    if (Math.random() < 0.4) {
      const randomScenario = errorScenarios[Math.floor(Math.random() * errorScenarios.length)]
      throw new Error(`${randomScenario.code}: ${randomScenario.message}`)
    }
  }

  function handleError(err: unknown) {
    if (err instanceof Error) {
      error.value = { message: err.message }
      return error.value
    }

    if (typeof err === 'string') {
      error.value = { message: err }
      return error.value
    }

    error.value = {
      message: 'An unexpected error occurred',
      details: err,
    }
    return error.value
  }

  return {
    handleError,
    simulateError,
  }
}
