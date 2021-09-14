const HtmlWebpackPlugin = require("html-webpack-plugin");

var path = require("path");

module.exports = {
  target: "web",
  entry: {
    /**
     * webpack-dev-server überwacht den Code von diesem Einstiegspunkt aus
     * und kompiliert den Code neu, sobald Änderungen gemacht werden.
     * In diesem Fall ist der Haupteinstigespunkt die index.ts Datei unseres Blueprints.
     */
    main: "./src/app/index.app.ts",
  },
  devServer: {
    port: 8080
  },
  resolve: {
    // Informiere Webpack darüber, welche Dateien für den Bundle-Prozess berücksichigt werden sollen.
    extensions: [".ts", ".js", "css"],
  },
  performance: {
    maxEntrypointSize: 700000,
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: { loader: "ts-loader", options: { transpileOnly: true } },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/app/index.html" }),
  ],
};