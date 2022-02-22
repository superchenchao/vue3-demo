// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })


// vite.config.ts
// import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  //src目录的配置
  resolve: {
    alias: {
      // src 目录路径
      '@': path.resolve(__dirname, 'src'),
    }
  },
  // 支持 less 样式
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    open: true,
    port: 3005,
    host: '0.0.0.0' // 还要再package.json中也配置一下， 才能实现使用 ip 地址访问启动的服务
  },
  plugins: [
    vue(),
    vueJsx(),
    /* ... */
    // 项目插件重命名之后废弃，改为使用 unplugin-vue-components，之前的也是可以使用的
    // ViteComponents({
    //   customComponentResolvers: [AntDesignVueResolver()],
    // }),

    // 新的使用方法
    // <https://github.com/antfu/unplugin-vue-components>
    // ant-design-vue 按需导入

    Components({
      resolvers: [
        AntDesignVueResolver({ resolveIcons: true }),
        // ElementPlusResolver(),
        // VantResolver(),
      ],
      // globalComponentsDeclaration
      dts: true,
      // customLoaderMatcher
      // include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/],
    })
  ],
});
