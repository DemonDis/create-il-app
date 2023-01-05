const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: '{{SAFE_NAME}}',
          remotes: {
            /* Example remotes
              remote: `remote@http://localhost:3001/remote.js`,
            */
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      );
    }

    return config;
  },
};
