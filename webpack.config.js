var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    index: './src/index.css',
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: '[name].css', // output js file name is identical to css file name
  },
  module: {
    noParse: /\.tsx?$/,
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'), // css file will override generated js file
  ],
};
