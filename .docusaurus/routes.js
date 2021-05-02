
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
  component: ComponentCreator('/blog','f8e'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','8e5'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','fee'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','5fa'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','5d1'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','016'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','7f2'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','e92'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','c5a'),
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
