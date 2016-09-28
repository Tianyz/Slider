var webpack = require('webpack');

module.exports = {
    entry: {
        'jquery.slider': './src/js/jquery.slider.js',
        'index': './src/js/index.js'
    },
    output: {
        path: __dirname + '/dist/js/',
        filename: '[name].js'
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
