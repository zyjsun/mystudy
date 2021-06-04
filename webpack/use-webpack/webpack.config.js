const path=require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',//入口
    output: {
        filename:'[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')//绝对路径

    }
  };
