import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-meta-layouts'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({ importMode: 'sync', dts: './src/typed-router.d.ts' }),
    Vue({
      template: { transformAssetUrls },
      features: { propsDestructure: true },
    }),
    Layouts(),
    Vuetify({ autoImport: true }),
    Components({ dts: './src/components.d.ts', types: [] }),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        VueRouterAutoImports,
        {
          vuetify: [
            'useTheme',
            'useRtl',
            'useLocale',
            'useDisplay',
            'useLayout',
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/stores'],
    }),
  ],
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    include: ['test/**/*.{test,spec}.ts', 'src/**/__tests__/*'],
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    server: { deps: { inline: ['vuetify'] } },
  },
})
