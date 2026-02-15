// Docusaurus config for Rick and Morty API Test Suite

const config = {
  title: 'Rick and Morty API Test Suite',
  tagline: 'Postman/Newman API Testing with Docusaurus',

  url: 'https://anxoportela.github.io',
  baseUrl: '/postman-newman-gh/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: {
        dark: true,
        light: false,
      },
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Rick and Morty API Tests',
      logo: {
        alt: 'Rick and Morty Logo',
        src: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Rick_and_Morty_season_1.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: '📚 API Docs',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} - Built with ❤️ by Anxo Portela-Insua Blanco`,
    },
  },
};

module.exports = config;
