const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/out/'
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: 'html-loader'
        }, 
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }]
        }, 
        {
            test: /images[\\\/].+\.(gif|png|jpe?g|svg|pdf)$/i,
            use: [{
                    loader: 'file-loader',
                    options: {
                            name: 'images/[name][hash].[ext]'
                        }
                    },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 70
                        }
                    }
                },
            ],
        }, 
        { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
        },   
        {
            test: /fonts[\\\/].+\.(eot|svg|ttf|woff|woff2|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name][hash].[ext]'
                }
            },

        },
        {
            test: /\.pdf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?minetype=application/pdf&name=[name].pdf'
        }]
    },

    plugins: [
    ],
};

module.exports = config;