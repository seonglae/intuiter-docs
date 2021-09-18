<template>
  <a class="nav-bar-title" :href="root" :aria-label="`${site.title}, back to home`">
    <img v-if="theme.logo" class="logo" :src="theme.logo" alt="Logo" />
    <span class="title">
      <span class="font-600">{{ site.title }}</span>
    </span>
  </a>
</template>

<script setup lang="ts">
import { useRouter, useData } from 'vitepress'
import { computed, ref, watch } from 'vue'

const router = useRouter()
const { site, theme } = useData()
const root = ref<string>(site.value.base)
const path = computed(() => router.route.path)
watch(path, () => (root.value = path.value.slice(0, 4)))
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
