import { defineConfig } from 'rspress/config';
import path from 'node:path';

export default defineConfig({
  root: 'docs',
  lang: 'zh',
  base: '/',
  title: 'electron-rsbuild',
  logo: {
    light: '/electron-rsbuild-light.png',
    dark: '/electron-rsbuild-light.png',
  },
  ssg: {
    strict: true,
  },
  markdown: {
    checkDeadLinks: true,
  },
  route: {
    cleanUrls: true,
    // exclude document fragments from routes
    exclude: ['**/zh/shared/**', '**/en/shared/**', './theme', './src'],
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/veaba/electron-rsbuild',
      },
    ],
    locales: [
      // {
      //   lang: 'en',
      //   label: 'English',
      //   title: 'Rsbuild',
      //   description: 'The Rspack-based Electron build tool for the web',
      //   editLink: {
      //     docRepoBaseUrl:
      //       'https://github.com/electron/docs/tree/main/docs/docs',
      //     text: '📝 Edit this page on GitHub',
      //   },
      // },
      {
        lang: 'zh',
        label: '简体中文',
        title: 'Rsbuild',
        outlineTitle: '目录',
        prevPageText: '上一页',
        nextPageText: '下一页',
        description: '基于 Rspack 的 Electron 构建工具',
        editLink: {
          docRepoBaseUrl: 'https://github.com/electron-rsbuild/docs/tree/main/docs/docs',
          text: '📝 在 GitHub 上编辑此页',
        },
      },
    ],
  },
  builderConfig: {
    dev: {
      lazyCompilation: true,
    },
    plugins: [],
    source: {
      alias: {
        '@components': path.join(__dirname, '@components'),
        '@en': path.join(__dirname, 'docs/en'),
        '@zh': path.join(__dirname, 'docs/zh'),
      },
    },
    server: {
      open: 'http://localhost:<port>/',
    },
    html: {
      // favicon: 'docs/public/logo.png',
      appIcon: {
        name: 'Electron-Rsbuild',
        icons: [
          {
            src: 'https://assets.rspack.dev/rsbuild/rsbuild-logo-192x192.png',
            size: 192,
          },
          {
            src: 'https://assets.rspack.dev/rsbuild/rsbuild-logo-512x512.png',
            size: 512,
          },
        ],
      },
    },
  },
});
