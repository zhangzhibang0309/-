module.exports = {
  devServer: {
    //代理列表
    proxy: {
      "/api": {
        target: "https://openapi.yiban.cn/oauth/access_token", //线上1
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      "/apii": {
        target: "https://openapi.yiban.cn/user/me", //线上2
        changeOrigin: true,
        pathRewrite: {
          "^/apii": "",
        },
      },
    },
  },
};
