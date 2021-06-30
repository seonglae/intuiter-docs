// @ts-check
const pkg = require('../package.json')

/**
 * @type {string}
 */
const gfont = 'https://fonts.gstatic.com'
/**
 * @type {string}
 */
let gfamily = 'family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600'

/**
 * @param lang {string}
 */
function site(lang) {
  const Docs = [
    { text: 'Intuiter', link: `/${lang}/docs/` },
    { text: 'Install', link: `/${lang}/docs/install` },
    { text: 'Usage', link: `/${lang}/docs/usage` },
  ]
  const Usages = [
    { text: 'Text', link: `/${lang}/usages/text` },
    { text: 'Mouse', link: `/${lang}/usages/mouse` },
    {
      link: `/${lang}/usages/shortcut`,
    },
    { text: 'Others', link: `/${lang}/usages/others` },
  ]
  const Versions = [
    { text: '0.6.0', link: `/${lang}/versions/0-6-0` },
    { text: '0.6.1', link: `/${lang}/versions/0-6-1` },
  ]
  const sidebar = [
    { text: 'Docs', children: Docs },
    { text: 'Usage', children: Usages },
  ]
  const nav = [
    { text: 'Versions', items: Versions },
    { text: 'Usages', items: Usages },
  ]

  return { sidebar, nav }
}

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: pkg.displayName,
  description: pkg.description,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'author', content: 'Seonglae Cho' }],
    ['meta', { property: 'og:title', content: 'Vitepress' }],
    ['meta', { property: 'og:image', content: `${pkg.homepage}/og-image.png` }],
    ['meta', { property: 'og:description', content: pkg.description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@SeonglaeC' }],
    ['meta', { name: 'twitter:image', content: `${pkg.homepage}/og-image.png` }],
    ['link', { rel: 'dns-prefetch', href: gfont }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: gfont }],
    ['link', { href: `${gfont}/css2?${gfamily}`, rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'seonglae/intuiter-docs',
    logo: '/logo.png',
    docsBranch: 'release',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',
    locales: {
      '/': { label: 'English', lang: 'en-US', ...site('en') },
      '/ko/': { label: 'Korean', lang: 'ko-KR', ...site('ko') },
    },
  },
}
