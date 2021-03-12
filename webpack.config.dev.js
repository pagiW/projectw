const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCss.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "@router": path.resolve(__dirname, 'src/router'),
            "@styles": path.resolve(__dirname, 'src/style'),
            "@img": path.resolve(__dirname, 'src/imgs'),
            "@components": path.resolve(__dirname, 'src/components')
        }
    },
    plugins: [
        new HtmlWebpack(
            {
                template: './public/index.html',
            }
        ),
        new MiniCss({
            filename: '[name].[contenthash].css'
        }),
        new Dotenv()
    ],
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3000
    }
}