import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/postman-newman-gh/docs',
    component: ComponentCreator('/postman-newman-gh/docs', '791'),
    routes: [
      {
        path: '/postman-newman-gh/docs',
        component: ComponentCreator('/postman-newman-gh/docs', 'e06'),
        routes: [
          {
            path: '/postman-newman-gh/docs',
            component: ComponentCreator('/postman-newman-gh/docs', '13e'),
            routes: [
              {
                path: '/postman-newman-gh/docs/',
                component: ComponentCreator('/postman-newman-gh/docs/', 'f0f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/postman-newman-gh/docs/api/characters',
                component: ComponentCreator('/postman-newman-gh/docs/api/characters', 'bd5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/postman-newman-gh/docs/api/episodes',
                component: ComponentCreator('/postman-newman-gh/docs/api/episodes', '7df'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/postman-newman-gh/docs/api/locations',
                component: ComponentCreator('/postman-newman-gh/docs/api/locations', '4c8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/postman-newman-gh/docs/intro',
                component: ComponentCreator('/postman-newman-gh/docs/intro', '4a8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/postman-newman-gh/docs/setup',
                component: ComponentCreator('/postman-newman-gh/docs/setup', '2f6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/postman-newman-gh/docs/test-results',
                component: ComponentCreator('/postman-newman-gh/docs/test-results', '643'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
