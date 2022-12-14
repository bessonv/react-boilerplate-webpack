const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: ["./src/index.tsx"],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
          Images: path.resolve(__dirname, 'public/assets'),
        },
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./public/index.html"),
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new ESLintPlugin({
          extensions: [".ts", ".tsx"]
        }),
    ],
    devServer: {
        port: 3000,
    },
}