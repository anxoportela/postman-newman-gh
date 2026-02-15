/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  defaultSidebar: [
    'index',
    'setup',
    {
      type: 'category',
      label: 'API Endpoints',
      items: ['characters', 'locations', 'episodes'],
    },
  ],
};

module.exports = sidebars;
