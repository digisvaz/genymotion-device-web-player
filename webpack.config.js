'use strict';

// const path = require('path');

module.exports = {
    // entry: {index: path.resolve(__dirname, 'src', 'GenymotionManager.js')},
    entry: ['./src/GenymotionManager.js', './src/worker/FileUploaderWorker.js'],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
};