/*
* @Author: inksmallfrog
* @Date:   2017-04-26 16:23:45
* @Last Modified by:   inksmallfrog
* @Last Modified time: 2017-04-27 22:04:28
*/

'use strict';
const koa = require('koa');
const app = new koa();

const serve = require('koa-static');
app.use(serve(__dirname+"/public"), {
    index: 'index.html'
});

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackMiddleware = require('koa-webpack-dev-middleware');
const compiler = webpack(webpackConfig);
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