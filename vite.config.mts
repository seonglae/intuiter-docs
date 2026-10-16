import { resolve } from 'path'
import type { UserConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'

const config: UserConfig = {
  optimizeDeps: {
    exclude: [
      'vue-demi',
      '@vueuse/shared',
      '@vueuse/core',
    ],
  },
  publicDir: resolve(__dirname, './assets'),
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Components({
      dirs: [
        '.vitepress/theme/components'
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: false,
      resolvers: [
        IconsResolver({
          prefix: false,
        }),
      ],
    }),
    Icons({ compiler: 'vue3' }),
    WindiCSS({
      preflight: false,
    }),
    {
      name: 'code-block-escape',
      enforce: 'post',
      transform(code, id) {
        if (!id.endsWith('.md'))
          return
        return code.replace(/\/\/```/mg, '```')
      },
    },
  ],
}

export default config
