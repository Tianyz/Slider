var webpack = require('webpack');

var fileName = 'jquery.slider.js';

module.exports = {
    entry: './src/js/' + fileName,
    output: {
        path: __dirname + '/dist/js/',
        filename: fileName
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
