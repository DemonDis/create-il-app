const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");

const webpack = require('webpack');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = (env, arg) => ({
  module: arg.mode === 'production' ? 'production' : 'development',
  devtool: arg.mode === 'production' ? 'source-map' : 'eval',
  entry: './src/index.js',

  output: {
    publicPath: env.hasOwnProperty('WEBPACK_SERVE') ? 'http://localhost:{{PORT}}/' : '/{{SAFE_NAME}}/',
  },

  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: {{PORT}},
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new ModuleFederationPlugin({
      name: "{{SAFE_NAME}}",
      filename: "remoteEntry.js",
      remotes: {
        /* Example remotes
          components: `components@{env.hasOwnProperty('WEBPACK_SERVE') ? 'http://localhost:3001' : '/components'}/remoteEntry.js`,
        */
      },
      exposes: {
        /* Example exposes
          './Button': './src/components/Button.vue',
        */
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
});
