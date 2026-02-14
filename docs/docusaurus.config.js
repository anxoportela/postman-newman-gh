// Docusaurus config for Rick and Morty API Test Suite

const config = {
  title: 'Rick and Morty API Test Suite',
  tagline: 'Postman/Newman API Testing with Docusaurus',

  url: 'https://anxoportela.github.io',
  baseUrl: '/postman-newman-gh/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    ['classic', {}],
  ],

  themeConfig: {
    navbar: {
      title: 'Rick and Morty API Tests',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Docs',
        },
        {
          to: '/test-results',
          label: 'Test Results',
          position: 'left',
        },
        {
          to: '/setup',
          label: 'Setup',
          position: 'left',
        },
        {
          href: 'https://github.com/anxoportela/postman-newman-gh',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
};

module.exports = config;
