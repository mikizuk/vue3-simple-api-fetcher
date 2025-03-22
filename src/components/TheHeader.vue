<script setup lang="ts">
import DarkModeSwitch from '@/components/DarkModeSwitch.vue'
</script>
<template>
  <header>
    <nav>
      <span>API Fetcher</span>
      <DarkModeSwitch />
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
}
</style>
