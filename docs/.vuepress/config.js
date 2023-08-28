const {readFileList, readTotalFileWords, readEachFileWords} = require('./webSiteInfo/readFile');


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
        search: true,
        searchMaxSuggestions: 10,
        //最后更新时间
        lastUpdated: 'Last Updated',
        //顶部导航
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '导览',
                link: '/basic/structure/'
            },
            {
                text: '计算机基础',
                link: '/basic/',
                items: [
                    {text: '数据结构与算法', link: '/basic/structure/'},
                    {text: '编程语言', link: '/basic/lang/'},
                ]
            },
            {
                text: '后端开发',
                link: '/backend/',
                items: [
                    {text: '框架', link: '/backend/framework/'},
                    {text: '中间件', link: '/backend/middleware/'},
                ]
            },
            {
                text: '前端开发',
                link: '/frontend/',
                items: []
            },
            {
                text: '软能力',
                link: '/devothers/'
            },
            {
                text: '索引',
                link: '/archives/',
                items: [
                    {text: '分类', link: '/categories/'},
                    {text: '标签', link: '/tags/'},
                    {text: '归档', link: '/archives/'},
                ],
            },
            {text: '关于', link: '/about/'},
            {text: 'Github主页', link: 'https://github.com/sine2cr'},

        ],


        //侧边栏
        sidebar: 'structuring',
        sidebarDepth: 2,
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
            avatar: '/img/avatar.jpg',
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
        //博客信息收集模块
        blogInfo: {
            blogCreate: '2022-11-4', // 博客创建时间
            indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
            pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
            readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
            eachFileWords: readEachFileWords([''], 300, 160),  // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
            mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
            totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
            moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
            // 下面两个选项：第一次获取访问量失败后的迭代时间
            indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
            pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
            // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
        },
    },

    head: [
        ['link', {rel: 'icon', href: '/img/avatar.jpg'}], //favicons，资源放在public文件夹
        [
            'meta',
            {
                name: 'sine2cr',
                content: '个人博客',
            },
        ],
        //统计网站数据
        ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
        ['link', {rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css'}]

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
    plugins: [
        {
            name: 'custom-plugins',
            globalUIComponents: ["PageInfo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
        }
    ],
    markdown: {
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
    }
}