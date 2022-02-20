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
        selectLanguageText: 'Language',
        navbar: [
          // NavbarItem
          {
            text: 'About me',
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
          //{
          //  text: 'Tutorials',
          //  link: '/tutorials/',
          //},
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
            text: 'Tutorials',
            children: [
              //{
              //  text: 'Docker',
              //  children: ['/projects/iobroker-docker-image/readme.md', '/projects/watchdog-docker-image/readme.md', '/projects/pkitool-docker-image/readme.md'],
              //},
              {
                text: 'ioBroker',
                children: ['/de/tutorials/iobroker/20210114.md'],
              },
            ],
          },
          // NavbarGroup
          //{
          //  text: 'Tutorials',
          //  children: [
          //    {
          //      text: 'ioBroker',
          //      link: '/de/tutorials/#iobroker'
          //    },
          //  ],
          // },
        ],
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
  