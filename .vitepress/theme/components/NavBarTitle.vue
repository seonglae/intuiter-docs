<template>
  <a class="nav-bar-title" :href="root" :aria-label="`${$site.title}, back to home`">
    <img v-if="$themeConfig.logo" class="logo" :src="$withBase($themeConfig.logo)" alt="Logo" />
    <span class="title">
      <span class="font-600">{{ $site.title }}</span>
    </span>
  </a>
</template>

<script setup lang="ts">
import { useRouter, useSiteData } from 'vitepress'
import { onMounted, computed, ref, watch } from 'vue'

const router = useRouter()
const siteData = useSiteData<DefaultTheme.Config>()
const theme = computed(() => siteData.value.themeConfig)
const root = ref<string>(siteData.value.base)
const path = computed(() => router.route.path)
watch(path, () => (root.value = path.value))
</script>

<style scoped>
.nav-bar-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--c-text);
  vertical-align: center;
  white-space: nowrap;
  margin-right: 2rem;
}

.nav-bar-title:hover {
  text-decoration: none;
}

.logo {
  margin-right: 0.5rem;
  height: 2.2rem;
  vertical-align: middle;
}

.title {
  line-height: 2rem;
  vertical-align: middle;
}
</style>
