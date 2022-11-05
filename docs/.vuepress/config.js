module.exports = {
  title: 'Sin',
  description: '学习笔记',
  base: '/Manual/',
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

      { text: 'Guide', link: '/guide/' },
      { text: 'java', link: '/MD/java' },
      /* {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      }, */
      { text: 'Github', link: 'https://github.com/sin2cr' },

    ],

    // sidebarDepth: 2,
    //侧边栏
    sidebar: [
      {
        title: '导航栏',
      },
      {
        title: 'java',
        collapsable: false,
        children: ['/MD/java']
      },
    ],
  },

  plugins: [
    '@vuepress/active-header-links',
    {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    '@vuepress/back-to-top',
    '@vuepress/blog',
    {
      directories: [
        {
          // 当前分类的唯一 ID
          id: 'post',
          // 目标文件夹
          dirname: '_posts',
          // `entry page` (或者 `list page`) 的路径
          path: '/',
        },
      ],
    },
    '@vuepress/nprogress',

  ]
}