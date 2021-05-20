const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/array-methods/array-methods.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new CopyPlugin({
      patterns: [
        { from: './src/array-methods/*.css', to: './[name][ext]' },
        { from: './src/tooltip/*.css', to: './[name][ext]' },
      ],
    }),
  ],
};
