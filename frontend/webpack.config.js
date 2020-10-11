const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.reactDOM$/,
                loader: 'react-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: __dirname + '/index.html'})
    ]
};