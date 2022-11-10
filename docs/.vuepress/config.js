module.exports = {
  title: 'Sin',
  description: '一份自由的记录型手册',
  // base: '/manual/', 使用github page时使用
  base: '', //现改用Netlify
  head: [
    [
      'link', { rel: 'icon', href: 'https://cdn.staticaly.com/gh/beichen2020/imgList@main/img/headshot.4p2gxh54vda0.png' }
    ]
  ],
  port: 80,
  cache: true,
  //主题配置
  themeConfig: {
    //导航栏图标
    logo: 'https://cdn.staticaly.com/gh/beichen2020/imgList@main/img/headshot.4p2gxh54vda0.png',
    //禁用搜索
    search: false,
    searchMaxSuggestions: 10,
    //最后更新时间
    lastUpdated: 'Last Updated',
    //顶部导航
    nav: [
      { text: 'Home', link: '/' },
      { text: '导航', link: '/guide/' },
      // { text: 'java', link: '/MD/java/' },
      { text: 'Github主页', link: 'https://github.com/sin2cr'},

    ],

    //侧边栏
    sidebarDepth: 2,
    sidebar: 'auto',
    // sidebar: [

    // ],
  },

  plugins: [
    '@vuepress/active-header-links',
    {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    '@vuepress/back-to-top',
    // '@vuepress/blog',
    // {
    //   directories: [
    //     {
    //       // 当前分类的唯一 ID
    //       id: 'post',
    //       // 目标文件夹
    //       dirname: '_posts',
    //       // `entry page` (或者 `list page`) 的路径
    //       path: '/',
    //     },
    //   ],
    // },
    '@vuepress/nprogress',

  ]
}