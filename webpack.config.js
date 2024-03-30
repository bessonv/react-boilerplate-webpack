const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
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
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html"),
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new ESLintPlugin({
          extensions: [".ts", ".tsx"]
        }),
    ],
    devServer: {
        port: 3000,
    },
    devtool: 'cheap-module-source-map'
}