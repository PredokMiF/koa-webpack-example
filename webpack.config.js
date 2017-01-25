const path = require('path');
// const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        './app.js'
    ],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            }
        ]
    }
};
