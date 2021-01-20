const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.mdx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
};
