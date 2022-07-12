import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

export default {
  entry: './src/app/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {loader: 'ts-loader', options: {transpileOnly: true}},
      },
    ],
  },
  resolve: {
    // Informiere Webpack darüber, welche Dateien für den Bundle-Prozess berücksichigt werden sollen.
    extensions: ['.ts', '.js', 'css'],
  },
  optimization: {
    minimize: true,
  },
  performance: {
    maxEntrypointSize: 700000,
  },
  mode: 'production',
  output: {
    path: path.resolve().concat('/public'),
    filename: 'bundled.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/app/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {from: 'src/nidoca.css', to: 'nidoca.css'},
        {from: 'src/logo.svg', to: 'logo.svg'},
      ],
    }),
  ],
};
