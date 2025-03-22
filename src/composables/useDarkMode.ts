import { ref, onMounted } from 'vue'

export function useDarkMode() {
  const isDark = ref(true) // Default to dark mode

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('darkMode', isDark.value.toString())
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme !== null) {
      isDark.value = savedTheme === 'true'
    }
    updateTheme()
  })

  return {
    isDark,
    toggleDarkMode,
  }
}
