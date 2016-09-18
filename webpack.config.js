var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        example: [
            './src/index.js',
        ], 
        'example.min': [
            './src/index.js',
        ], 
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    // devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            { test: path.resolve(__dirname, 'node_modules', 'pixi.js'), loader: 'ify' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2', 'react'],
                    plugins: [
                        'add-module-exports',
                        'transform-es2015-modules-umd',
                    ],
                },
            },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false,
            },
            comments: false
        }),
        new webpack.NoErrorsPlugin()
    ],
    postLoaders: [
        {
            test: /\.js$/,
            include: path.resolve(__dirname, 'node_modules', 'pixi.js'),
            loader: 'transform/cacheable?brfs'
        }
    ]
};