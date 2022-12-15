const {
  withStorybookModuleFederation,
} = require('storybook-module-federation');

const storybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@storybook/preset-scss'],
  framework: "@storybook/react",
  core: {
    builder: 'webpack5',
  },
};

const moduleFederationConfig = {
  name: 'components',
  filename: 'remoteEntry.js',
  remotes: {},
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: false,
    },
  },
};

module.exports = withStorybookModuleFederation(moduleFederationConfig)(
  storybookConfig
);