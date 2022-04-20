import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
import {navbar, sidebar} from './configs'

// 根据环境变量配置是否是生产环境
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '程序员乐源',
            description: 'Programmer\'s source of happiness',
        }
    },

    base: '/',

    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: `/images/icons/favicon-16x16.png`,
            },
        ],
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: `/images/icons/favicon-32x32.png`,
            },
        ],
        ["link", {rel: "stylesheet", href: "//at.alicdn.com/t/font_2154804_w16nlfaojue.css"}],
        ['link', {rel: 'manifest', href: '/manifest.webmanifest'}],
        ['meta', {name: 'application-name', content: 'VuePress'}],
        ['meta', {name: 'apple-mobile-web-app-title', content: 'VuePress'}],
        [
            'meta',
            {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
        ],
        [
            'link',
            {rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png`},
        ],
        [
            'link',
            {
                rel: 'mask-icon',
                href: '/images/icons/safari-pinned-tab.svg',
                color: '#3eaf7c',
            },
        ],
        ['meta', {name: 'msapplication-TileColor', content: '#3eaf7c'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}]
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'itlemon/CodingGuide',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        locales: {
            '/': {
                // navbar
                navbar: navbar.zh,
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',

                // sidebar
                sidebar: sidebar.zh,

                // page meta
                editLinkText: '在 GitHub 上编辑当前页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',

                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',

                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',

                // a11y
                openInNewWindow: '在新窗口打开',
                toggleDarkMode: '切换夜间模式',
                toggleSidebar: '切换侧边栏',
            }
        },
        themePlugins: {
            // only enable git plugin in production mode
            git: isProd,
            // use shiki plugin in production mode instead
            prismjs: !isProd,
        },
    },

    // md配置
    markdown: {
        code: {
            lineNumbers: true,
            highlightLines: true
        }
    },

    // 插件配置
    plugins: [
        // [
        //     // 谷歌分析
        //     '@vuepress/plugin-google-analytics',
        //     {
        //         id: 'G-7G4Q35XYNX',
        //     }
        // ]
    ]
    // plugins: [
    //     [
    //         '@vuepress/plugin-docsearch',
    //         {
    //             appId: '34YFD9IUQ2',
    //             apiKey: '9a9058b8655746634e01071411c366b8',
    //             indexName: 'vuepress',
    //             searchParameters: {
    //                 facetFilters: ['tags:v2'],
    //             },
    //             locales: {
    //                 '/zh/': {
    //                     placeholder: '搜索文档',
    //                     translations: {
    //                         button: {
    //                             buttonText: '搜索文档',
    //                             buttonAriaLabel: '搜索文档',
    //                         },
    //                         modal: {
    //                             searchBox: {
    //                                 resetButtonTitle: '清除查询条件',
    //                                 resetButtonAriaLabel: '清除查询条件',
    //                                 cancelButtonText: '取消',
    //                                 cancelButtonAriaLabel: '取消',
    //                             },
    //                             startScreen: {
    //                                 recentSearchesTitle: '搜索历史',
    //                                 noRecentSearchesText: '没有搜索历史',
    //                                 saveRecentSearchButtonTitle: '保存至搜索历史',
    //                                 removeRecentSearchButtonTitle: '从搜索历史中移除',
    //                                 favoriteSearchesTitle: '收藏',
    //                                 removeFavoriteSearchButtonTitle: '从收藏中移除',
    //                             },
    //                             errorScreen: {
    //                                 titleText: '无法获取结果',
    //                                 helpText: '你可能需要检查你的网络连接',
    //                             },
    //                             footer: {
    //                                 selectText: '选择',
    //                                 navigateText: '切换',
    //                                 closeText: '关闭',
    //                                 searchByText: '搜索提供者',
    //                             },
    //                             noResultsScreen: {
    //                                 noResultsText: '无法找到相关结果',
    //                                 suggestedQueryText: '你可以尝试查询',
    //                                 openIssueText: '你认为该查询应该有结果？',
    //                                 openIssueLinkText: '点击反馈',
    //                             },
    //                         },
    //                     },
    //                 },
    //             },
    //         },
    //     ]
    // ]
})
