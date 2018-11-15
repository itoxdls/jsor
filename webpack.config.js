const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './lib/jsor.js'
    ],
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'jsor.min.js',
        library: 'JSOR',
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