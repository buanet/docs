import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

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
            children: [
            {
              text: 'Docker Images',
              children: ['/projects/iobroker-docker-image/readme.md'/*, '/projects/watchdog-docker-image/readme.md', '/projects/pkitool-docker-image/readme.md'*/],
            },
            {
              text: 'Raspberry OS Images',
              children: ['/projects/iobroker-raspberrypios-image/readme.md'/*, '/projects/docker-raspberrypios/readme.md'*/],
            },
            //              {
            //                text: 'Other',
            //                children: ['/projects/php-contact-form/readme.md'],
            //              },
            ],
        },
        {
          text: 'Docs',
          children: ['/projects/iobroker-docker-image/docs.md', '/projects/iobroker-raspberrypios-image/docs.md'],
        },
        //          {
        //            text: 'Tutorials',
        //            children: [
        //{
        //  text: 'Docker',
        //  children: ['/projects/iobroker-docker-image/readme.md', '/projects/watchdog-docker-image/readme.md', '/projects/pkitool-docker-image/readme.md'],
        //},
        //              {
        //                text: 'ioBroker',
        //                children: ['/tutorials/iobroker/20210114.md'],
        //              },
        //            ],
        //          },
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
          children: [
            {
              text: 'Docker Images',
              children: ['/de/projects/iobroker-docker-image/readme.md'],
            },
            {
              text: 'Raspberry OS Images',
              children: ['/de/projects/iobroker-raspberrypios-image/readme.md'/*, '/de/projects/docker-raspberrypios/readme.md'*/],
            },
          ],
        },
        {
          text: 'Doku',
          children: ['/de/projects/iobroker-docker-image/docs.md', '/de/projects/iobroker-raspberrypios-image/docs.md'],
        },
        //          {
        //            text: 'Tutorials',
        //            children: [
        //{
        //  text: 'Docker',
        //  children: ['/projects/iobroker-docker-image/readme.md', '/projects/watchdog-docker-image/readme.md', '/projects/pkitool-docker-image/readme.md'],
        //},
        //              {
        //                text: 'ioBroker',
        //                children: ['/de/tutorials/iobroker/20210114.md'],
        //              },
        //            ],
        //          },
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
  