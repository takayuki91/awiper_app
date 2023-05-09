const { environment } = require('@rails/webpacker')

// jQueryを使用可にする
const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $:'jquery/src/jquery',
    jQuery:'jquery/src/jquery',
    // swiper導入
    Swiper:'swiper/swiper-bundle'
  })
)

module.exports = environment
