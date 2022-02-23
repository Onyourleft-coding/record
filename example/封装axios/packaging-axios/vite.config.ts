import { ConfigEnv, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path';

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  '@': pathResolve('src'),
};

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/index.scss"`,
        },
      },
    },
    server: {
      port: 3005,
      open: true,
      proxy: {
        // 代理配置
        '/api': {
          target:
            'https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      // 构建
      target: 'modules', // 构建目标格式，默认是modules，也可以esbuild配置项
      outDir: 'dist', //构建输出路径
      assetsDir: 'assets', // 静态资源文件夹，和outDir同级
      emptyOutDir: true, //构建前清库outDir目录
      cssCodeSplit: true, //运行css文件按chunk拆分，chunk加载时插入，如果false则所有的样式导出一个css文件
      chunkSizeWarningLimit: 500, //chunk大小警告的限制，以kbs为单位
      rollupOptions: {
        //打包选项
        output: {
          manualChunks: {},
        },
      },
    },
    plugins: [vue()],
  };
};
