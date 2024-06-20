import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Stereum',
  tagline: 'Ethereum Node Setup & Manager',
  favicon: 'img/branding/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ethereum-node-web-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stereum-dev', // Usually your GitHub org/user name.
  projectName: 'ethereum-node-web-docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'main',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/stereum-dev/ethereum-node-web-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/stereum-dev/ethereum-node-web-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/branding/stereum-social-card.png',
    navbar: {
      title: 'Stereum',
      logo: {
        alt: 'Stereum Logo',
        src: 'img/branding/logo.svg',
        href: 'https://stereum.com/',
      },
      items: [
        {
          to: '/', 
          label: 'Home',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/stereum-dev/ethereum-node/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Stake with 32 ETH - Guide',
              to: '/docs/guides/installation/use-case-guides/staking/ethereum/ethereum-solo-staking',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://stereum.com/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/DzAwgnSXtB',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/stereumdev',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/stereum-dev/ethereum-node/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stereum FlexCo`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
