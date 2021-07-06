

module.exports={
    devServer:{
        proxy: {
            '/api':{
                target: 'http://ustbhuangyi.com/sell/',
                changeOrigin: true,
                PathRewrite:{
                    '^/api': '/api'
                }
            }
        }
    }
}