module.exports = {
  build: {
    vendor: ['axios']
  },
  plugins: [
    '~plugins/filters',
    '~plugins/pv'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/less/index.less', lang: 'less'}
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  transition: {
    beforeEnter () {
      console.log('test')
    }
  }
}
