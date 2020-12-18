module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    runtimeCompiler: true,
    productionSourceMap: false,
    devServer: {
        open:true,
        proxy: {
            '/api':{
                target:'http://192.168.0.107:7001',
                changeOrigin:true,
                pathRewrite:{
                    '/api':'web/system'
                }
            }
        }
    }
}