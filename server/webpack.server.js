const path = require('path');
const nodeExternals = require('webpack-node-externals');

// const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react',
                    'stage-0',
                    [
                        'env', {
                            target: {
                                browsers: ['last 2 versions']
                            }
                        }
                    ]
                ]
            }
        }]
    }
};

// module.exports = merge(baseConfig, serverConfig);
module.exports = serverConfig;