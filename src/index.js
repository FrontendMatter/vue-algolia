// Load components
import AlgoliaSearchDropdown from './components/algolia-search-dropdown'

let VueAlgolia = {
	AlgoliaSearchDropdown
}

// Setup
VueAlgolia.install = function (Vue) {}

// auto install in browser
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueAlgolia)
}

// ES6
export default VueAlgolia

// CommonJS
module.exports = exports.default