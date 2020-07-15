<template>
	<view class="page-collection">
		<card v-for="item in list" :datas="item" :key="item.id" :isCollect="true" @refresh="init"></card>
	</view>
</template>

<script>
	import card from '../../components/card.vue'
	export default {
		data() {
			return {
				list:[]
			}
		},
		created() {
			this.init()
		},
		methods: {
			async init() {
				let res = await this.$api.getCollect()
				if(res) {
					this.list = res
				}
			},
			
		},
		components: {
			card
		}
	}
</script>

<style>

</style>
