// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const ENV_WEB_URL = process.env.WEB_URL ? process.env.WEB_URL : 'http://localhost/'
const ENV_BASE_URL = process.env.BASE_URL ? process.env.BASE_URL : '/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QVR Product Technical Document',
  tagline: 'This website will list common issues of QVR series products.',
  url: ENV_WEB_URL,
  baseUrl: ENV_BASE_URL,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: process.env.ORG_NAME, // Usually your GitHub org/user name.
  projectName: process.env.PROJECT_NAME, // Usually your repo name.

  plugins: [
    'plugin-image-zoom'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: '',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: 'QVR Product Technical Document',
        logo: {
          alt: 'QVR Logo',
          src: 'img/QVP_Logo.png',
        },
        hideOnScroll: true,
        items: [
          /*
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Doc',
          },
          {to: '/blog', label: 'Blog', position: 'left'}*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*{
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoomSelector: '.markdown :not(h2,em) > img',
    }),
};

module.exports = config;
