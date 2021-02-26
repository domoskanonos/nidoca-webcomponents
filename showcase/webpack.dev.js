const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './source/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  performance: {
    maxEntrypointSize: 700000
  },
  devServer: {
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: { extensions: ['.ts', '.js'] },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {loader: 'ts-loader', options: {transpileOnly: true}}
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './source/index.html' })]
};
