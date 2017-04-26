/*
* @Author: inksmallfrog
* @Date:   2017-04-26 16:23:45
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-26 16:48:47
*/

'use strict';
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackMiddleware = require('koa-webpack-dev-middleware');

const koa = require('koa');
const app = new koa();
const serve = require('koa-static');

const compiler = webpack(webpackConfig);

app.use(serve(__dirname+"/public"), {
    index: 'index.html'
});

app.use(webpackMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats:{
        colors: true,
    },
    historyApiFallback: true
}));

app.listen(3000);