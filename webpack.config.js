const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
        ],
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
};