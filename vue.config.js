module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: ['@/assets/scss/main.scss']
    }
  },
  devServer: {
    compress: true,
    public: 'http://9381c50ee3b1.ngrok.io' // That solved it
  }
}
