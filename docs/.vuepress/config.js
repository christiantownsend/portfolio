module.exports = {
    title: 'Christian Townsend Portfolio',
    description: 'Just playing around',
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
    ],
}