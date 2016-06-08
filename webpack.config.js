var fileName = 'jquery.slider' + '.js';

console.log('\n');
console.log(__dirname + '/dist/js/' + fileName + '.js');
console.log('\n');

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
    }
};
