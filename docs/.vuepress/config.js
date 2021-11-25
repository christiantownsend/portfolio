module.exports = {
    title: 'Christian Townsend Portfolio',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/static/favicon.svg' }]
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
                before: info => `<div class="span-${info}">`,
                after: '</div>',
            },
        ],
    ],
}