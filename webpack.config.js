const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    entry: {
        app: path.join(__dirname, './app/app.js'),
    },
    output: {
        path: path.join(__dirname, './dist/'),
        filename: '[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: true,
        }),
    ],
    resolve: {
        modules: ['node_modules', path.resolve('./app')],
        extensions: ['.js', '.json', '.scss', '.css'],
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
};

module.exports = webpackConfig;
