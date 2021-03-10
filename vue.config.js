module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      // 别名配置
      alias: {
        // @ 为 src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
