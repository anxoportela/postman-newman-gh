/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  apiSidebar: [
    'intro',
    {
      type: 'category',
      label: 'API Endpoints',
      items: ['api/characters', 'api/locations', 'api/episodes'],
    },
  ],
};

module.exports = sidebars;
