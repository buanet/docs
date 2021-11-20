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
        navbar: [
          // NavbarItem
          {
            text: 'About',
            link: '/about/',
          },
          // NavbarGroup
          {
            text: 'Projects & Docs',
            children: [
              {
                text: 'Docker Images',
                children: ['/projects/iobroker-docker-image/readme.md', '/projects/watchdog-docker-image/readme.md', '/projects/pkitool-docker-image/readme.md'],
              },
              {
                text: 'Raspberry OS Images',
                children: ['/projects/iobroker-raspberryos/readme.md', '/projects/docker-raspberryos/readme.md'],
              },
              {
                text: 'Other',
                children: ['/projects/php-contact-form/readme.md'],
              },
            ],
          },
          {
            text: 'Tutorials',
            link: '/tutorials/',
          },
        ],
      },
      '/de/': {
        selectLanguageName: 'Deutsch',
      },
    },
    logo: '/images/logo.png',
    logoDark: '/images/logo_dark.png',
    editLink: false,
    contributors: false,
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/de/': {
            placeholder: 'Suche',
          },
        },
      },
    ],
  ],
}
  