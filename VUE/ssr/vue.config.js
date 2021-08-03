// webpack打包vue项目的过程中，分离出来一点页面
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const nodeExternals = require('webpack-node-externals')

exports.chainWebpack = webpackConfig => {
  if (!process.env.SSR) {
    // 客户端打包
    webpackConfig.devServer.disableHostCheck(true)
    return
  }

  // 服务端打包
  webpackConfig
    .entry('app')
    .clear()
    .add('./src/main.server.js')

  // 让webpack以node适用的方式处理动态导入
  webpackConfig.target('node')
  // 使用node风格导出模块
  webpackConfig.output.libraryTarget('commonjs2')
  // 将服务器的整个输出构建为单个JSON文件的插件
  webpackConfig
    .plugin('manifest')
    .use(new WebpackManifestPlugin({ fileName: 'ssr-manifest.json' }))

  webpackConfig.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }))
  webpackConfig.optimization.splitChunks(false).minimize(false)

  webpackConfig.plugins.delete('hmr')
  webpackConfig.plugins.delete('preload')
  webpackConfig.plugins.delete('prefetch')
  webpackConfig.plugins.delete('progress')
  webpackConfig.plugins.delete('friendly-errors')
}