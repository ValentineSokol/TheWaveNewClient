const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    open: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
};
