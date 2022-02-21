module.exports = {
  devServer: {
    //代理列表
    proxy: {
      "/api": {
        target: "https://openapi.yiban.cn/oauth/access_token", //线上1
        changeOrigin: true,
        secure: false,//
        pathRewrite: (path) => path.replace(/^\/api/,"")
      },
    },
  },
};
