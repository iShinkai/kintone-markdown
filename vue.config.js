module.exports = {
  publicPath: '/',
  filenameHashing: false,
  pages: {
    app: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'main.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1000000,
        name: 'fonts/[name].[ext]'
      })
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap(args => {
        args[0].terserOptions.compress.drop_console = true
        return args
      })
    } else {
      // any settings
    }
  }
}
