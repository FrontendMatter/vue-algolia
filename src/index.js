// Load components
import AlgoliaInstantsearchDropdown from './components/algolia-instantsearch-dropdown'

let VueAlgolia = {
	AlgoliaInstantsearchDropdown
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