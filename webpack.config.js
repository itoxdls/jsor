const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './src/js-easy-to-html.js'
    ],
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js-easy-to-html.js'
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/)
    ]
}