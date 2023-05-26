import { getThemeConfig, defineConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  // 文章默认作者
  author: '四宮かぐや',
  // 友链
  friend: [
    {
      nickname: 'FlapyPan',
      des: 'Web developer. High school student.',
      avatar:
        'https://avatars.githubusercontent.com/u/67328567?v=4',
      url: 'https://www.flapypan.top/'
    },
    {
      nickname: '四宮かぐや',
      des: 'Full stack developer',
      avatar: 'https://cdn.staticaly.com/gh/dlOwOlb/idle_bed/master/2023/05/2675bb61adef68462f99f41642dd6a918d.jpg',
      url: 'https://dlOwOlb.github.io'
    },
    {
      nickname: 'Ketuer',
      des: '柏码程序员首席讲师',
      avatar:
        'https://avatars.githubusercontent.com/u/63346302?v=4',
      url: 'https://github.com/Ketuer'
    },
    {
      nickname: '柏码',
      des: '柏码程序员官网',
      avatar: 'https://itbaima.net/assets/logo-dark-8ca446f1.png',
      url: 'https://itbaima.net'
    }
  ],
  recommend: {
    showSelf: true
  },
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  search: 'pagefind',
  authorList: [
    {
      nickname: '四宮かぐや',
      url: 'https://dlOwOlb.github.io',
      des: 'God rewards the diligent'
    }
  ],
  popover: {
    title: '公告',
    body: [
      {
        type: 'text',
        content: 'QQ交流群：759551802 🎉🎉'
      },
      { type: 'text', content: '👇加入柏码的大家庭，和我们一起进步吧~👇' },
      {
        type: 'text',
        content: '欢迎大家加群&私信交流'
      },
      {
        type: 'button',
        content: '柏码官网',
        link: 'https://itbaima.net'
      }
    ],
    duration: 0
  }
})

export default defineConfig({
  extends: blogTheme,
  lang: 'zh-cn',
  title: "四宮かぐや",
  description: '四宮かぐや的个人知识库，基于 vitepress 实现',
  head:[
      ['meta', {name: 'theme-color', content: '#ffffff'}],
      ['link', {rel: 'icon', href: 'https://cdn.staticaly.com/gh/dlOwOlb/' +
            'idle_bed/master/2023/05/26e943c9423e7447608b677ba1fc302002.ico', type: 'image/png'}],
      ['link',{rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16'}],

  ],
  vite: {
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme']
    }
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '上次更新于',
    footer: {
      message: 'A blog for personal knowledge base~',
      copyright:
        'MIT Licensed | <a target="_blank" href="https://theme.sugarat.top/"> @sugarat/theme </a>'
    },
    logo: 'https://cdn.staticaly.com/gh/dlOwOlb/idle_bed/master/2023/05/26e943c9423e7447608b677ba1fc302002.ico',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/dlOwOlb'
      }
    ]
  }
})
