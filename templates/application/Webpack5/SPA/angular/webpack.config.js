const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (env, arg) => ({
  output: {
    publicPath: env.hasOwnProperty('WEBPACK_SERVE') ? 'http://localhost:{{PORT}}/' : '/{{SAFE_NAME}}/',
    uniqueName: '{{SAFE_NAME}}',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "{{SAFE_NAME}}",
      filename: 'remoteEntry.js',
      remotes: {
        /* Example remotes
          components: `components@${env.hasOwnProperty('WEBPACK_SERVE') ? 'http://localhost:3001' : '/components'}/remoteEntry.js`,
        */
      },
      exposes: {
        /* Example exposes
          './ProfileModule': './app/components/component.module.ts',
        */
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true },
        '@ngxs/store': { singleton: true, eager: true },
        'mdmf-shared': { singleton: true, eager: true },
      },
    }),
  ],
});
