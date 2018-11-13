const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './lib/js-easy-to-html.js'
    ],
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js-easy-to-html.min.js',
        library: 'jsEasyToHtml',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/)
    ]
}