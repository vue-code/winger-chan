module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    devtool: 'source-map'
  },
	devServer: {
		proxy: {
			'/login': {
				target: 'http://localhost:8081',
				changeOrigin: true,
			},
			'/aa': {
				target: 'http://localhost:8081',
				changeOrigin: true,
			}
		}
	}
}
