import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus_personal/__docusaurus/debug',
    component: ComponentCreator('/docusaurus_personal/__docusaurus/debug', '208'),
    exact: true
  },
  {
    path: '/docusaurus_personal/__docusaurus/debug/config',
    component: ComponentCreator('/docusaurus_personal/__docusaurus/debug/config', '4a1'),
    exact: true
  },
  {
    path: '/docusaurus_personal/__docusaurus/debug/content',
    component: ComponentCreator('/docusaurus_personal/__docusaurus/debug/content', '9a9'),
    exact: true
  },
  {
    path: '/docusaurus_personal/__docusaurus/debug/globalData',
    component: ComponentCreator('/docusaurus_personal/__docusaurus/debug/globalData', '140'),
    exact: true
  },
  {
    path: '/docusaurus_personal/__docusaurus/debug/metadata',
    component: ComponentCreator('/docusaurus_personal/__docusaurus/debug/metadata', '688'),
    exact: true
  },
  {
    path: '/docusaurus_personal/__docusaurus/debug/registry',
    component: ComponentCreator('/docusaurus_personal/__docusaurus/debug/registry', '306'),
    exact: true
  },
  {
    path: '/docusaurus_personal/__docusaurus/debug/routes',
    component: ComponentCreator('/docusaurus_personal/__docusaurus/debug/routes', '1e7'),
    exact: true
  },
  {
    path: '/docusaurus_personal/docs',
    component: ComponentCreator('/docusaurus_personal/docs', '85d'),
    routes: [
      {
        path: '/docusaurus_personal/docs',
        component: ComponentCreator('/docusaurus_personal/docs', '4d9'),
        routes: [
          {
            path: '/docusaurus_personal/docs',
            component: ComponentCreator('/docusaurus_personal/docs', '54f'),
            routes: [
              {
                path: '/docusaurus_personal/docs/Instalación LNVim',
                component: ComponentCreator('/docusaurus_personal/docs/Instalación LNVim', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus_personal/docs/intro',
                component: ComponentCreator('/docusaurus_personal/docs/intro', 'd2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus_personal/',
    component: ComponentCreator('/docusaurus_personal/', '7d8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
