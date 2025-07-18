<script setup lang="ts">
import { useToggle, useDark } from '@vueuse/core'
const theme = useTheme()
const { drawer } = storeToRefs(useAppStore())
const route = useRoute()
const breadcrumbs = computed(() => {
  return route!.matched
    .filter((item) => item.meta && item.meta.title)
    .map((r) => ({
      title: r.meta.title!,
      disabled: r.path === route.path || false,
      to: r.path,
    }))
})
const isDark = useDark({
  onChanged(dark: boolean) {
    theme.change(dark ? 'dark' : 'light')
  },
})
const toggleDark = useToggle<true, false | null>(isDark)
</script>

<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-breadcrumbs :items="breadcrumbs" />
    <v-spacer />
    <div id="app-bar" />
    <div>
      <v-switch
        :model-value="isDark"
        color=""
        hide-details
        density="compact"
        inset
        false-icon="mdi-white-balance-sunny"
        true-icon="mdi-weather-night"
        style="opacity: 0.8"
        @update:model-value="toggleDark"
      />
    </div>
    <v-btn
      icon
      href="https://github.com/kingyue737/vitify-next"
      size="small"
      class="ml-2"
      target="_blank"
    >
      <v-icon size="30" icon="mdi-github" />
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
:deep(.v-breadcrumbs-divider) {
  opacity: 0.5;
}
:deep(.v-switch__thumb .v-icon) {
  --v-icon-size-multiplier: 1.2 !important;
}
</style>
