<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFetcher from '@/components/TheFetcher.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="app-container">
    <TheHeader class="header" />
    <main>
      <TheFetcher />
    </main>
    <TheFooter class="footer" />
  </div>
</template>

<style scoped>
.app-container {
  margin: 0 auto;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  height: 70px;
  background-color: var(--bg-color);
  box-shadow: 0 2px 4px var(--text-color);
  padding: 1rem;
}

main {
  flex: 1;
  padding-inline: 1rem;
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer {
  height: 34px;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: var(--bg-color);
  box-shadow: 2px 0 4px var(--text-color);
}
</style>
