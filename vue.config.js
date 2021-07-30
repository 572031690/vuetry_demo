module.exports = {
    //方向代理
    devServer: {
        proxy: {
            //只要以/api开头的 就代理到http://m.maoyan.com页面上
            '/api': {
                target: 'https://maoyan.com',
                // pathRewrite: { '^/api': '' },
                // ws: true,
                //允许跨域
                changeOrignin: true
            }
        }
    }
}