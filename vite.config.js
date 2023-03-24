import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          collections: {
            custom: {
              circle: '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"></circle></svg>',
              /*And then, you can use it on your html: <span class="i-custom:circle"></span>*/
            },
            // mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default),
          },
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        })
      ],
    })
  ],
  define: { 'process.env': {}},
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: { port: 3000 },
  // change name to your repo name " base: '/REPO/' "
  base: '/vue3-template/',
})
