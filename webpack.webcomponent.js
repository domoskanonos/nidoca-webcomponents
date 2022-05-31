import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {loader: "ts-loader", options: {transpileOnly: true}},
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    optimization: {
        minimize: true,
    },
    performance: {
        maxEntrypointSize: 700000,
    },
    mode: "production",
    output: {
        path: path.resolve().concat("/docs/webcomponents"),
        filename: "nidoca-webcomponents.js",
    }, plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],
};