const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: ["./src/scripts/index.js", "./src/styles/style.scss"],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
          Images: path.resolve(__dirname, 'public/assets'),
          Scss: path.resolve(__dirname, 'src/styles')
        },
    },
    output: {
        path: path.join(__dirname, "dist"), // directory where our output file will be saved
        filename: "bundle.js", // specifies the name of the output file
        // assetModuleFilename: 'images/[name][ext]',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // (js|jsx)$ or (ts|tsx)$
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env", "@babel/react"],
                    plugins: [],
                }
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
          extensions: [".js", ".jsx"]
        }),
    ],
    devServer: {
        port: 3000,
    },
}