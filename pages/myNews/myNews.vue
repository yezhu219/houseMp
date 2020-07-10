<template>
	<view class="page-mynews page">
		<view class="tabContainer df-ac">
			<view class="tab-item" :class="{active:current==item.id}" v-for="(item,index) in tab" @click="itemClick(item)" :key="item.id">{{item.name}}</view>
		</view>
		<view>
			<card v-for="it in list" :key="it.id" :datas="it" @refresh="init"></card>
		</view>
	</view>
</template>

<script>
	import card from '../../components/card.vue'
	export default {
		data() {
			return {
				tab:[
					{id:1,name:'已发布'},
					{id:2,name:'未发布'},
				],
				current:1,
				list:[],
				origin:[]
			}
		},
		created() {
			this.init()
		},
		methods: {
			async init() {
				let res = await this.$api.getMyNews()
				if(res) {
					this.origin = res
					this.list = res.filter(item=>item.active)
				}
			},
			itemClick(data) {
				this.current = data.id
				if(data.id==1) {
					this.list = this.origin.filter(item=>item.active)
				}else {
					this.list = this.origin.filter(item=> !item.active)
				}
			}
		},
		components: {
			card
		}
	}
</script>

<style lang="scss">
.page-mynews {
	background-color: #fff;
	.tab-item {
		flex:0 0 50%;
		text-align: center;
		padding: 20px 0;
		
		&.active {
			color: #f33333;
		}
	}
}
</style>
