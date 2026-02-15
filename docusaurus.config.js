// Docusaurus config for Rick and Morty API Test Suite

const config = {
  title: 'Rick and Morty API Test Suite',
  tagline: 'Postman/Newman API Testing with Docusaurus',

  url: 'https://anxoportela.github.io',
  baseUrl: '/postman-newman-gh/',

  onBrokenLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        pages: {
          path: 'src/pages',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Rick and Morty API Tests',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: '📚 API Docs',
        },
        {
          to: '/test-results',
          label: '📊 Test Results',
          position: 'left',
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
