<template>
	<view class="searchPage page">
		<view class="search mb-30">
			<image src="../../static/icon/search.png" mode=""></image>
			<input type="text" v-model="key" @change="init">
		</view>
		<view class="list" v-if="list.length>0">
			<card v-for="(item,index) in list " :datas="item.fields" :houseId="item.pk" :key="index"></card>
		</view>
		<view class="tac" v-if="list.length==0">
			没有数据~~~
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
			this.key = this.type= op.type
		},
		mounted() {
			this.init()
		},
		methods: {
			async init() {
				let res = await this.$api.search({key:this.key})
				if(res) {
					this.list = res
					console.log(res[0].pk,'pk')
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
