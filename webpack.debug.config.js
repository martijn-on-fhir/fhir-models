const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: ['./src/index.ts'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        libraryTarget: 'commonjs2',
        clean: true
    },
    externals: {
        'aws-sdk': 'aws-sdk'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    target: 'node',
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    }
};
