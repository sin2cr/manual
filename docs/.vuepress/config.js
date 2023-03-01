module.exports = {
  title: 'Sine2cr的个人站',
  description: '一份自由的记录型手册',
  // base: '/manual/', 使用github page时使用
  base: '', //现改用Netlify
  // head: [
  //   [
  //     'link', { rel: 'icon', href: 'https://cdn.staticaly.com/gh/beichen2020/imgList@main/img/headshot.4p2gxh54vda0.png' }
  //   ]
  // ],
  port: 80,
  cache: true,
  //主题配置
  theme: 'vdoing',
  themeConfig: {

    //导航栏图标
    // logo: 'https://cdn.staticaly.com/gh/beichen2020/imgList@main/img/headshot.4p2gxh54vda0.png',
    //禁用搜索
    search: false,
    searchMaxSuggestions: 10,
    //最后更新时间
    //lastUpdated: 'Last Updated',
    //顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '导航',
        link: '/',
        items: [
          {text:'编程语言',link:'/lang/'}
        ]
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
      {text:'关于',link:'/about/'},
      { text: 'Github主页', link: 'https://github.com/sine2cr'},

    ],



    
    //侧边栏
    sidebar: 'structuring',
    // sidebarDepth: 2,
    // sidebar: 'auto',
    // sidebar: [

    // ],
    //作者信息
    author: {
      name: 'sine2cr', // 必需
      link: 'https://github.com/sine2cr', // 可选的
    },
    //博主信息
    blogger: {
      avatar: '/img/touxiang.jpg',
      name: 'sine2cr',
      slogan: '加油',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        // {
        //   iconClass: 'icon-youjian',
        //   title: '发邮件',
        //   link: 'mailto:',
        // },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/sine2cr',
        },
        // {
        //   iconClass: 'icon-erji',
        //   title: '听音乐',
        //   link: 'https://music.163.com/#/playlist?id=755597173',
        // },
      ],
    },
  },

  head: [
    // ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'sine2cr',
        content: '个人技术博客',
      },
    ],
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    // ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // plugins: [
  //   '@vuepress/active-header-links',
  //   {
  //     sidebarLinkSelector: '.sidebar-link',
  //     headerAnchorSelector: '.header-anchor'
  //   },
  //   '@vuepress/back-to-top',
  //   // '@vuepress/blog',
  //   // {
  //   //   directories: [
  //   //     {
  //   //       // 当前分类的唯一 ID
  //   //       id: 'post',
  //   //       // 目标文件夹
  //   //       dirname: '_posts',
  //   //       // `entry page` (或者 `list page`) 的路径
  //   //       path: '/',
  //   //     },
  //   //   ],
  //   // },
  //   '@vuepress/nprogress',

  // ]
}