<script>
	import algoliasearch from 'algoliasearch'
	import { DropdownSearch } from 'themekit-vue'

	export default {
		mixins: [
			DropdownSearch
		],
		data () {
			return {
				searchValue: null,
				indices: {}
			}
		},
		props: {
			algoliaAppId: {
				type: String,
				required: true
			},
			algoliaApiKey: {
				type: String,
				required: true
			},
			algoliaIndices: {
				type: Array,
				required: true
			},
			algoliaQueryOptions: {
				type: Object,
				default () {
					return {
						hitsPerPage: 5
					}
				}
			},
			algoliaTransformHit: {
				type: Function,
				default () {
					return (hit) => {
						return hit
					}
				}
			}
		},
		methods: {
			indiceHits (name) {
				const results = this.results.find((h) => h.indice.name === name)
				return results ? results.hits : []
			},
			search (value) {
				this.results = []
				if (value) {
					this.algoliaIndices.forEach((indice) => {
						let queryOptions = this.algoliaQueryOptions
						if (indice.queryOptions !== undefined) {
							queryOptions = indice.queryOptions
						}
						this.indices[indice.name].search(value, queryOptions)
							.then((content) => {
								let transformHit = this.algoliaTransformHit
								if (indice.transformHit !== undefined) {
									transformHit = indice.transformHit
								}
								this.results.push({
									indice,
									hits: content.hits.map(transformHit)
								})
							})
					})
				}
			}
		},
		compiled () {
			this.client = algoliasearch(this.algoliaAppId, this.algoliaApiKey)
			this.algoliaIndices.forEach((indice) => {
				this.indices[indice.name] = this.client.initIndex(indice.name)
			})
		},
		watch: {
			searchValue: 'search'
		}
	}
</script>