// base url sestting

module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: process.env.VUE_APP_API,
        },
      },
    },
  },
};
