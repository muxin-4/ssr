const path = require('path');
// const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const clientConfig = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
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

// module.exports = merge(baseConfig, clientConfig);
module.exports = clientConfig;