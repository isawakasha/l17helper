const path = require("path")
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        popup: "./src/popup.jsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            }
        }]
    },
    plugins: [
        new HtmlPlugin({
            template: "./src/popup.html",
            filename: "popup.html",
        }),
        new CopyPlugin({
            patterns: [{
                from: "public"
            }]
        })
    ],
};