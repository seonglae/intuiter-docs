// @ts-check
const pkg = require('../package.json')

/** @type {string} */
const gfont = 'https://fonts.gstatic.com'
/** @type {string} */
const gfamily = 'family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600'
/** @type {string} */
const gfontapi = 'https://fonts.googleapis.com'

/**
 * @param lang {string}
 */
function site(lang) {
  const isKo = lang === 'ko'
  const Docs = [
    { text: isKo ? '소개' : 'Introduce', link: `/${lang}/docs/` },
    { text: isKo ? '설치' : 'Install', link: `/${lang}/docs/install` },
    { text: isKo ? '사용법' : 'Usage', link: `/${lang}/docs/usage` },
  ]
  const Usages = [
    { text: isKo ? '텍스트 컨트롤' : 'Text Control', link: `/${lang}/usages/text` },
    { text: isKo ? '마우스 컨트롤' : 'Mouse Control', link: `/${lang}/usages/mouse` },
    {
      text: isKo ? '단축키' : 'Shortcuts',
      link: `/${lang}/usages/shortcut`,
    },
    { text: isKo ? '기타기능' : 'Others', link: `/${lang}/usages/others` },
  ]
  const Versions = [{ text: '0.7.3', link: `/${lang}/versions/0-7-3` }]
  const sidebar = [
    { text: isKo ? '버전' : 'Docs', children: Docs },
    { text: isKo ? '사용법' : 'Usage', children: Usages },
  ]
  const nav = [
    { text: isKo ? '버전' : 'Versions', items: Versions },
    { text: isKo ? '사용법' : 'Usage', items: Usages },
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
    ['link', { href: `${gfontapi}/css2?${gfamily}`, rel: 'stylesheet' }],
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
