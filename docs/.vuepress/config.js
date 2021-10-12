module.exports = {
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

  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/de/': {
        selectLanguageName: 'Deutsch',
      },
    },
    logo: '/images/logo.png',
    logoDark: '/images/logo_dark.png',
    repo: 'buanet/docs',
  },
}
  