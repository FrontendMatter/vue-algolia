var path = require('path')
var WebpackConfig = require('themekit-webpack-config')
var config = new WebpackConfig()
	.withStandaloneEntry('vue-algolia')
	.withLibrary('VueAlgolia')
	.withAlias({
		'vue-algolia': path.resolve(__dirname, '..')
	})
	.use('extract')

module.exports = config