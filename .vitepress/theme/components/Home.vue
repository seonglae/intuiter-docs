<template>
  <div class="home" aria-labelledby="main-title">
    <HomeHero />
    <slot name="hero" />
    <HomeFeatures />
    <slot name="features" />
    <HomeFooter />
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
import HomeHero from './HomeHero.vue'
import HomeFeatures from './HomeFeatures.vue'
import HomeFooter from './HomeFooter.vue'
import { useRouter, useData } from 'vitepress'
import { onMounted, computed } from 'vue'

const router = useRouter()
const { site } = useData()
const theme = computed(() => site.value.themeConfig)
onMounted(() => {
  if (router.route.path !== '/') {
    localStorage.lang = router.route.path
    return
  }
  if (localStorage.lang) return router.go(localStorage.lang)
  else
    for (const path in theme.value.locale)
      if (theme.value.locale[path].lang.toLowerCase().includes(navigator.language.toLowerCase())) return router.go(path)
  router.go('/en/')
})
</script>

<style scoped>
.home {
  @apply overflow-x-hidden;
  padding-top: var(--header-height);
  height: 100% !important;
  display: flex;
  flex-flow: column;
}
</style>
