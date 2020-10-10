module.exports = {
  title: 'Serrina',
  tagline: 'Infodump on the continent of Serrina',
  url: 'https://serrina.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Kevin Deyne', // Usually your GitHub org/user name.
  projectName: 'Serrina', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Serrina',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/locations',
          activeBasePath: 'docs',
          label: 'Locations',
          position: 'left',
        },
        {
          to: 'docs/culture',
          activeBasePath: 'docs',
          label: 'Culture',
          position: 'left',
        },
        {
          to: 'docs/characters',
          activeBasePath: 'docs',
          label: 'Characters',
          position: 'left',
        },
        {
          to: 'docs/quests',
          activeBasePath: 'docs',
          label: 'Quests',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'Viewing history',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
