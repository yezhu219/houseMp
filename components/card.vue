<template>
	<!-- <view class="card-item df" @click="toDetail">
		<image :src="datas.thumb" mode=""></image>
		<view class="">
			<view class="fz28 fw-b mb-24">{{getType(datas.region)}}｜{{datas.built_up_area}}㎡</view>
			<view class="mb-24 c-333 fz24">{{datas.address}}</view>
			<view class="fz28 c-ff6">{{datas.rent || ''}}元/㎡/天</view>
		</view> -->
		
		<uni-swipe-action>
		    <uni-swipe-action-item :options="show?isCollect?options:options1:[]" @click="onClick" @change="change">
		       <!-- <view class='cont'>SwipeAction 基础使用场景</view> -->
					 <view class="card-item df" @click="toDetail">
					 	<image :src="datas.thumb" mode=""></image>
					 	<view class="">
					 		<view class="fz28 fw-b mb-24">{{getType(datas.region)}}｜{{datas.built_up_area}}㎡</view>
					 		<view class="mb-24 c-333 fz24">{{datas.address}}</view>
					 		<view class="fz28 c-ff6">{{datas.rent || ''}}元/㎡/天</view>
					 	</view>
						</view>
		    </uni-swipe-action-item>
		</uni-swipe-action>
	<!-- </view> -->
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		props: {
			datas: {
				type:Object
			},
			show: {
				type:Boolean,
				default: true
			},
			isCollect: {
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				options:[
					{
							text: '取消收藏',
							style: {
									backgroundColor: '#dd524d'
							}
					}
				],
				options1:[
					{
							text: '编辑',
							style: {
									backgroundColor: '#007aff'
							}
					}, {
							text: '删除',
							style: {
									backgroundColor: '#dd524d'
							}
					}
				],
			};
		},
		methods:{
			toDetail() {
				uni.navigateTo({
					url:'/pages/detail/detail?id='+this.datas.id
				})
			},
			getType(data) {
				let regionList = JSON.parse(uni.getStorageSync('region'))
				let item = regionList.find(item=>item.id == data)
				return item&&item.name
			},
		  async onClick(e){
				console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
				if(e.content.text=='删除') {
					let res = await this.$api.delHouse({id:this.datas.id})
					if(res) {
						this.$emit('refresh')
						uni.showToast({
							icon:'none',
							title:'删除成功'
						})
					}
				}else if(e.content.text=='编辑') {
					uni.navigateTo({
						url:'/pages/addNews/addNews?id='+this.datas.id
					})
				}else if(e.content.text=='取消收藏') {
					let re = await this.$api.delCollect()
				}		
			},
			change(open){
				console.log('当前开启状态：'+ open)
			}
		},
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		}
	}
</script>

<style lang="scss">
.card-item {
	width: 100%;
	padding:20upx 25upx;
	background-color: #fff;
	border-radius: 10upx;
	margin-bottom: 10upx;
	image {
		width: 190upx;
		height: 126upx;
		margin-right: 34upx;
	}
}
</style>
