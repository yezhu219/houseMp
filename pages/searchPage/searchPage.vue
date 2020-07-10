<template>
	<view class="searchPage page">
		<view class="search mb-30">
			<image src="../../static/icon/search.png" mode=""></image>
			<input type="text" v-model="key" @change="init">
		</view>
		<view class="list">
			<card v-for="(item,index) in list " :datas="item.fields" :key="index"></card>
		</view>
	</view>
</template>

<script>
	import card from '../../components/card.vue'
	export default {
		data() {
			return {
				list:[],
				type:'',
				key:''
			};
		},
		onLoad(op) {
			this.type= op.type
		},
		created() {
			
		},
		methods: {
			async init() {
				let res = await this.$api.search({key:this.key})
				if(res) {
					this.list = res
				}
			}
		},
		components: {
			card
		}
	}
</script>

<style lang="scss">
.searchPage{}
</style>
