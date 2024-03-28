// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Seektech',
  url: 'https://justintian.github.io',
  baseUrl: '/seektech-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seektech', // Usually your GitHub org/user name.
  projectName: 'seektech-doc', // Usually your repo name.
  deploymentBranch: 'master-deploy',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path:"doc",
          routeBasePath:"/",
          sidebarCollapsed:true,
          sidebarPath: require.resolve('./sidebars.js'),
          exclude: ['**/cases.md']
          // docLayoutComponent: require.resolve('./src/theme/DocPage/Layout/index.tsx')
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/clicknium/clicknium-docs/doc/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Seektech Docs',
        logo: {
          alt: 'Seektech Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'index',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            href: 'https://justintian.github.io/seektech-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
