module.exports = {
  publicPath: '/',
  filenameHashing: false,
  pages: {
    main: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'main.html'
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap(args => {
        args[0].terserOptions.compress.drop_console = false
        return args
      })
    } else {
      // any settings
    }
  }
}
