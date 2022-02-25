module.exports = {
    title: 'Christian Townsend | Designer',
    description: 'Christian Townsend is a designer currently working with The Collected Works. In his free time you might find him doodling in his sketchbook, making music, or generally poking away at his ever-growing list of interests.',
    themeConfig: {
        nav: [
            { text: 'Work', url: '/'},
            { text: 'Info', url: '/info'},
        ],
        lastUpdated: true,
    },
    head: [
        ['link', { rel: 'icon', href: '/static/favicon.svg' }],
        ['link', { rel: 'preconnect', href: 'https://player.vimeo.com' }],
        ['link', { rel: 'preconnect', href: 'https://i.vimeocdn.com' }],
        ['link', { rel: 'preconnect', href: 'https://f.vimeocdn.com' }],
        ['link', { rel: 'preload', href: 'https://player.vimeo.com/api/player.js', as: 'script' }],
        ['script', { url: 'https://player.vimeo.com/api/player.js' }],
        ['script', {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-6GQJFBLNM6'
        }],
        ['script', {}, `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-6GQJFBLNM6');
        `],
    ],
    markdown: {
        anchor: { permalink: false, permalinkBefore: true, permalinkSymbol: '#' },
        links: { externalIcon: false }
    },
    plugins: [
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
        ['vuepress-plugin-nprogress'],
        [
            'vuepress-plugin-container',
            {
                type: 'span',
                before: info => `<div class="span-${info} m-span-4">`,
                after: '</div>',
            },
        ],
    ],
}