const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
   entry: './source/index.ts',
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: { loader: 'ts-loader', options: { transpileOnly: true } }
         },
      ],
   },
   resolve: {
      extensions: ['.ts', '.js'],
   },
   optimization: {
      minimize: true,
      minimizer: [
         new TerserPlugin({
            parallel: true,
            terserOptions: {}
         })
      ]
   },
   performance: {
      maxEntrypointSize: 700000
   },
   mode: 'production',
   output: {
      path: path.resolve(__dirname).concat('/build'),
      filename: 'showcase.js'
   },
   plugins: [new HtmlWebpackPlugin({ template: './source/index.html' })]
}