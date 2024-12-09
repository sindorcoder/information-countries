const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/js/app.js",
        about: "./src/js/about.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Countries",
            template: "./src/pages/indexTemp.html",
            filename: "index.html",
            chunks: ["app"]
        }),
        new htmlWebpackPlugin({
            title: "About Countries",
            template: "./src/pages/abouTemp.html",
            filename: "about.html",
            chunks: ["about"]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    }
}