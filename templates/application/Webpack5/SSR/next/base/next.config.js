const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const path = require('path');

module.exports = (phase, { defaultConfig }) => ({ 
  distDir: '{{SAFE_NAME}}',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: '{{SAFE_NAME}}',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            /* Example remotes
               remote:  `remote@${phase === PHASE_DEVELOPMENT_SERVER ? 'http://localhost:3001' : '/remote'}/remote.js`,
            */
          },
          exposes:{
            // './Button': './components/Button/Button.jsx',
          },
          shared: {}
        }),
      );
    }

    return config;
  },
});
