import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default {
  bundler: webpackBundler({}),
  locales: {
    '/': {
      lang: 'en-US',
      title: 'docs.buanet.de',
      description: 'Learn more about my projects.',
    },
    '/de/': {
      lang: 'de-DE',
      title: 'docs.buanet.de',
      description: 'Lerne mehr über meine Projekte.',
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        navbar: [
          {
            text: 'About me',
            link: '/about/',
          },
          {
            text: 'Projects',
            children: ['/iobroker-docker-image/readme.md', '/iobroker-raspberrypios-image/readme.md'],
          },
          {
            text: 'Docs',
            children: ['/iobroker-docker-image/docs/readme.md', '/iobroker-raspberrypios-image/docs/readme.md'],
          },
        ],
      },
      '/de/': {
        selectLanguageName: 'Deutsch',
        selectLanguageText: 'Sprache',
        navbar: [
          // NavbarItem
          {
            text: 'Über mich',
            link: '/de/about/',
          },
          {
            text: 'Projekte',
            children: ['/de/iobroker-docker-image/readme.md', '/de/iobroker-raspberrypios-image/readme.md'],
          },
          {
            text: 'Doku',
            children: ['/de/iobroker-docker-image/docs/readme.md', '/de/iobroker-raspberrypios-image/docs/readme.md'],
          },
        ],
      },
    },
    logo: '/images/logo.png',
    logoDark: '/images/logo_dark.png',
    editLink: false,
    contributors: false,
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/de/': {
          placeholder: 'Suche',
        },
      },
    }),
  ],
}
