const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "less-loader"
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Chat.io', template: './index.html', inject: 'body' })
    ],
    devServer: {
        open: true,
        compress: true,
        historyApiFallback: true,
        port: 3000
    }
};
