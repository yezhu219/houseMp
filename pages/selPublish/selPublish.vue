<template>
	<view class="page selPublish">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		created() {
			this.init()
		},
		methods: {
			async init() {
				let res = await this.$api.getBrand()
				if(res) {
					this.list= res
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
