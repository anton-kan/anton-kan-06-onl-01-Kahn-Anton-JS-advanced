const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/math/math.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/math/math.html' }),
    new CopyPlugin({
      patterns: [{ from: './src/math/*.css', to: './[name][ext]' }],
    }),
  ],
};
