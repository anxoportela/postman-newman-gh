import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/postman-newman-gh/docs',
    component: ComponentCreator('/postman-newman-gh/docs', 'c86'),
    routes: [
      {
        path: '/postman-newman-gh/docs',
        component: ComponentCreator('/postman-newman-gh/docs', '457'),
        routes: [
          {
            path: '/postman-newman-gh/docs',
            component: ComponentCreator('/postman-newman-gh/docs', '4e8'),
            routes: [
              {
                path: '/postman-newman-gh/docs/',
                component: ComponentCreator('/postman-newman-gh/docs/', 'f0f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/postman-newman-gh/docs/characters',
                component: ComponentCreator('/postman-newman-gh/docs/characters', '42c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/postman-newman-gh/docs/episodes',
                component: ComponentCreator('/postman-newman-gh/docs/episodes', 'ee1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/postman-newman-gh/docs/locations',
                component: ComponentCreator('/postman-newman-gh/docs/locations', 'b29'),
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
