const { resolve } = require('path');
const path=require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',//入口
    output: {
        filename:'[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')//绝对路径
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader','css-loader']
            },{
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset'
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js','.vue'], // import test from '@/index.js'
        alias: {
            '@': path.join(__dirname,'src')
        }
    }
  };
