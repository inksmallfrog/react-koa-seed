/*
* @Author: inksmallfrog
* @Date:   2017-04-26 16:00:29
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 22:02:56
*/

'use strict';
const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './app.js',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
            }
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src')
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};