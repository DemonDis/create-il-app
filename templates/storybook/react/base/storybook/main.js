const { withStorybookModuleFederation } = require('storybook-module-federation');

module.exports = withStorybookModuleFederation({
  name: '{{SAFE_NAME}}',
  filename: 'remoteEntry.js',
  remotes: {
    /* Example remotes
      components: `components@{process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '/components'}/remoteEntry.js`,
    */
  },
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
})({
  stories: [
    '../src/**/*.stories.mdx', 
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
})