const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const webpack = require('webpack');
const devWare = require('koa-webpack');

const config = require('./webpack.config.js');

const app = new Koa();
const port = 3000;

app
    .use(bodyParser())
    .use(serve(path.join(__dirname, 'public')))
    .use(devWare({config/*, dev:{}, hot:{}*/}))

    .listen(port, () => {
        console.log('Server Started ?http://localhost:' + port.toString());
    });
