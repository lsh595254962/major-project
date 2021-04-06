module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production'
      config.performance = {
        maxEntrypointSize: 5120000,
        maxAssetSize: 5120000
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV === 'production',
  runtimeCompiler: false,
  productionSourceMap: false,
  css: {
    sourceMap: true,
    loaderOptions: {}
  }
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.2.213:5000',
  //       changeOrigin: true,
  //       pathRewirte: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}
