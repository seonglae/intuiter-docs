// @ts-check
const pkg = require('../../package.json')

const Docs = [
  {
    text: 'Getting Started',
    link: '/docs/'
  },
]

const Versions = [
  {
    text: '0.6.0',
    link: '/versions/0.6.0'
  },
  {
    text: '0.6.1',
    link: '/versions/0.6.1'
  }
]

const slidebars = [
  {
    text: 'Docs',
    children: Docs
  },
  {
    text: 'Versions',
    children: Versions
  }
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: pkg.displayName,
  description: pkg.description,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Seonglae Cho' }],
    ['meta', { property: 'og:title', content: 'Vitepress' }],
    ['meta', { property: 'og:image', content: `${pkg.homepage}/og-image.png` }],
    ['meta', { property: 'og:description', content: pkg.description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@SeonglaeC' }],
    [
      'meta',
      { name: 'twitter:image', content: `${pkg.homepage}/og-image.png` }
    ],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        crossorigin: 'anonymous',
        href: 'https://fonts.gstatic.com'
      }
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600',
        rel: 'stylesheet'
      }
    ]
  ],
  themeConfig: {
    repo: 'seonglae/intuiter-docs',
    logo: '/logo.png',
    docsDir: 'docs',
    docsBranch: 'release',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',
    nav: [
      {
        text: 'Docs',
        items: Docs
      },
      {
        text: 'Versions',
        items: Versions
      }
    ],
    sidebar: {
      '/versions/': slidebars,
      '/docs/': slidebars,
      '/': slidebars
    }
  }
}
