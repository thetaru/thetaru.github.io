module.exports = {
  title: 'thetaru.github.io',
  tagline: 'The tagline of my site',
  url: 'https://thetaru.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thetaru', // Usually your GitHub org/user name.
  projectName: 'thetaru.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: 'thetaru.github.io',
      items: [
        {
          to: 'docs/about/AboutThisPage',
          label: 'About',
          position: 'right'
        },
        {
          to: 'docs/resume/Resume',
          label: 'Resume',
          position: 'right'
        },
        {
          to: 'docs/portfolio/Portfolio',
          label: 'Portfolio',
          position: 'right'
        },
      ],
    },
    footer: {
      copyright: 'Copyright © thetaru.github.io',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
