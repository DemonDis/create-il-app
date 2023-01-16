// const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const deps = require("./package.json").dependencies;

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = (env, arg) => ({
	entry: {
		'build/bundle': ['./src/index.js']
	},
  output: {
    path: path.join(__dirname, '/public'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
  },

  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".ts", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },

  module: {
    rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: !prod
						},
						emitCss: prod,
						hotReload: !prod
					}
				}
			},
      {
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				// required to prevent errors from Svelte on Webpack 5+
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
			}
    ],
  },
  mode,
  plugins: [
    new ModuleFederationPlugin({
      name: "{{SAFE_NAME}}",
      filename: "remoteEntry.js",
      remotes: {
        /* Example remotes
          components: `components@${env.hasOwnProperty('WEBPACK_SERVE') ? 'http://localhost:3001' : '/components'}/remoteEntry.js`,
        */
      },
      exposes: {
        /* Example exposes
          './Button': './src/components/Button.svelte',
        */
      },
      shared: {
        ...deps,
        "solid-js": {
          singleton: true,
          requiredVersion: deps["solid-js"],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    // new HtmlWebPackPlugin({
    //   template: "./public/index.html",
    // }),
  ],
  devtool: prod ? false : 'source-map',
  devServer: {
    port: {{PORT}},
    hot: true
  },
});
