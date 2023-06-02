const path = require('path');

module.exports = {
  entry: './src/frontend/admin/js/home.js',
  output: {
    path: path.resolve("./src/frontend/admin/", 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
