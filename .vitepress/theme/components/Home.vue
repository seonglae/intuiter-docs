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
import { useRouter, useSiteData } from 'vitepress'
import { onMounted, computed } from 'vue'

const router = useRouter()
const siteData = useSiteData<DefaultTheme.Config>()
const theme = computed(() => siteData.value.themeConfig)
onMounted(() => {
  if (localStorage.lang) {
    if (router.route.path !== '/') localStorage.lang = router.route.path
    router.go(localStorage.lang)
  } else
    for (const path in theme.value.locales) if (theme.value.locales[path].lang === navigator.language) router.go(path)
})
</script>

<style scoped>
.home {
  @apply overflow-x-hidden;
  padding-top: var(--header-height);
}
</style>
