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
    { text: isKo ? '소개' : 'Introduce', link: `/${lang}/docs/index.html` },
    { text: isKo ? '설치' : 'Install', link: `/${lang}/docs/install.html` },
    { text: isKo ? '사용법' : 'Usage', link: `/${lang}/docs/usage.html` },
  ]
  const Usages = [
    { text: isKo ? '텍스트 컨트롤' : 'Text Control', link: `/${lang}/usages/text.html` },
    { text: isKo ? '마우스 컨트롤' : 'Mouse Control', link: `/${lang}/usages/mouse.html` },
    {
      text: isKo ? '앱실행' : 'App Shortcuts',
      link: `/${lang}/usages/shortcut.html`,
    },
    { text: isKo ? '기타기능' : 'Others', link: `/${lang}/usages/others.html` },
  ]
  const Versions = [
    { text: '0.8.2', link: `/${lang}/versions/0-8-2.html` },
    { text: '0.8.1', link: `/${lang}/versions/0-8-1.html` },
    { text: '0.8.0', link: `/${lang}/versions/0-8-0.html` },
    { text: '0.7.3', link: `/${lang}/versions/0-7-3.html` },
  ]
  const Languages = [
    { text: 'English', link: `/en/` },
    { text: '한국어', link: `/ko/` },
  ]
  const sidebar = [
    { text: isKo ? '시작하기' : 'Get Started', children: Docs },
    { text: isKo ? '사용법' : 'Usage', children: Usages },
    { text: isKo ? '히스토리' : 'History', children: Versions },
  ]
  const nav = [
    { text: '🌎', items: Languages },
  ]
  return { sidebar, nav }
}

const locales = {
  '/en/': { lang: 'en-US', ...site('en') },
  '/ko/': { lang: 'ko-KR', ...site('ko') },
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
    ['meta', { property: 'og:title', content: 'Intuiter' }],
    ['meta', { property: 'og:image', content: `${pkg.homepage}/program.png` }],
    ['meta', { property: 'og:video', content: `${pkg.homepage}/button.gif` }],
    ['meta', { property: 'og:description', content: pkg.description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@SeonglaeC' }],
    ['meta', { name: 'twitter:image', content: `${pkg.homepage}/program.png` }],
    ['link', { rel: 'dns-prefetch', href: gfont }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: gfont }],
    ['link', { href: `${gfontapi}/css2?${gfamily}`, rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'seonglae/intuiter',
    docsRepo: 'seonglae/intuiter-docs',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',
    locale: locales,
  },
  // vitepress 1 keys locales by path segment and merges each one's themeConfig
  // into the page's site data, which is where the theme reads sidebar and nav
  locales: {
    en: { label: 'English', lang: 'en-US', link: '/en/', themeConfig: site('en') },
    ko: { label: '한국어', lang: 'ko-KR', link: '/ko/', themeConfig: site('ko') },
  },
  // the sidebar lists the current page's headings, which vitepress 1 no longer
  // puts in page data unless asked
  // vitesse is the palette the prism variables in code.css came from
  markdown: { headers: true, theme: { light: 'vitesse-light', dark: 'vitesse-dark' } },
}
