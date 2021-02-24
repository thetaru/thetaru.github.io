
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','2e0'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','97b'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','933'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','2b2'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','1e6'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','259'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','62e'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','45a'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','e57'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','327'),
  
  routes: [
{
  path: '/docs/about/AboutMe',
  component: ComponentCreator('/docs/about/AboutMe','416'),
  exact: true,
},
{
  path: '/docs/about/AboutThisPage',
  component: ComponentCreator('/docs/about/AboutThisPage','642'),
  exact: true,
},
{
  path: '/docs/portfolio/Portfolio',
  component: ComponentCreator('/docs/portfolio/Portfolio','a8f'),
  exact: true,
},
{
  path: '/docs/resume/Resume',
  component: ComponentCreator('/docs/resume/Resume','f12'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
