const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (development) => ({
  entry: {
    main: path.resolve(__dirname, 'src', 'index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: development ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
  },

  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'),
    favicon: 'public/logo.png',
  })],

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: 'defaults',
                modules: false,
              }],
              [
                '@babel/preset-react',
                {
                  development,
                },
              ],
            ],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        }],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
});
