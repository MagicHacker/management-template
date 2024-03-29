const path = require('path')
const Webpack = require('webpack')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  configureWebpack: {
    devServer: {
      before: require('./mock'),
      open: true,
      hot: true,
      port: 8080
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        }
      ]
    },
    resolve: {
      alias: {
        '@src': resolve('src'),
        '@assets': resolve('assets')
      }
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()]
  },
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(resolve('./src/icon')).end()
    config.module
      .rule('icon')
      .test(/\.svg$/)
      .include.add(resolve('./src/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        externalConfig: 'svgo-config.yml'
      })
  }
}
