<template>
	<view class="page">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="ban in bannerList" :key="ban.id">
				<view class="swiper-item"><image :src="ban.file" mode=""></image></view>
			</swiper-item>
		</swiper>
		<view class="search mb-30 mt-20">
			<image src="../../static/icon/search.png" mode=""></image>
			<input type="text" @click="toSearch(false)">
		</view>
		<view class="nav-list mb-15">
			<view class="nav-item" v-for="item in navList" :key="item.id" @click="toSearch(item)">
				<image :src="item.icon" mode=""></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="tool">
			<div class="tool-item" v-for="tool in tools " :key="tool.id" @click="toolDetail(tool)">
				<image :src="tool.icon" mode=""></image>
				<text>{{tool.name}}</text>
			</div>
		</view>
		<view  class="mb-15 fz26 " style="padding-left: 20upx;">热门推荐</view>
		<view>
			<card v-for="item in list" :key="item.id" :datas="item" :show="false"></card>
		</view>
	</view>
</template>

<script>
	import card from '../../components/card.vue'
	export default {
		data() {
			return {
				navList:[
					{id:1,name:'商铺出租',icon:require('static/icon/n1.png')},
					{id:2,name:'生意转让',icon:require('static/icon/n2.png')},
					{id:3,name:'厂房出租',icon:require('static/icon/n3.png')},
					{id:4,name:'仓库出租',icon:require('static/icon/n4.png')},
					{id:5,name:'联合办公',icon:require('static/icon/n5.png')},
					{id:6,name:'办公楼盘',icon:require('static/icon/n6.png')},
					{id:7,name:'商业新盘',icon:require('static/icon/n7.png')},
					{id:8,name:'品牌库',icon:require('static/icon/n8.png')},
				],
				tools:[
					{id:1,name:'预约看房',icon:require('static/icon/yy.png')},
					{id:2,name:'地图看房',icon:require('static/icon/dtkf.png')},
					{id:3,name:'品牌库',icon:require('static/icon/ppk.png')},
				],
				regionList:[],
				list:[],
				bannerList:[]
			}
		},
		onLoad() {

		},
		async created() {
			await this.getRegin()
			this.init()
			this.getBannerList()
		},
		methods: {
			async init() {
				let res = await this.$api.homeRecord()
				if(res) {
					this.list = res
				}
			},
			async getBannerList() {
				let res = await this.$api.getBanner()
				if(res) {
					this.bannerList = res
				}
			},
			async getRegin() {
				let res = await this.$api.getRegion()
				if(res) {
					this.regionList = res
					uni.setStorageSync('region',JSON.stringify(res))
				}
			},
			toolDetail(data) {
				if(data.id==1) {
					uni.navigateTo({
						url:'/pages/addAppoint/addAppoint'
					})
				}else if(data.id==2) {
					
				}else {
					uni.navigateTo({
						url:'/pages/selPublish/selPublish'
					})
				}
			},
			toSearch(data="") {
				if(data.id==8) {
					uni.navigateTo({
						url:'/pages/selPublish/selPublish'
					})
					return 
				}
				let type = data?data.name:""
				uni.navigateTo({
					url:'/pages/searchPage/searchPage?type='+type
				})
			}
		},
		components: {
			card
		}
	}
</script>

<style lang="scss">
	.page {
		swiper {
			height: 490upx;
		}
		swiper-item {
			height: 490upx;
			image {
				width: 100%;
				height: 490upx;
			}
		}
		.nav-list {
			display: flex;
			flex-wrap: wrap;
			padding:45upx 0 0 0;
			background-color: #fff;
			border-radius: 10upx;
			.nav-item {
				flex:0 0 25%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				margin-bottom: 45upx;
				image {
					width: 106upx;
					height: 106upx;
					margin-bottom: 10upx;
				}
				text {
					font-size: 24upx;
					
				}
			}
		}
		.tool {
			display: flex;
			background-color: #fff;
			border-radius: 10upx;
			margin-bottom: 30upx;
			.tool-item {
				padding: 45upx 0;
				flex:0 0 33.33%;
				display: flex;
				align-items: center;
				justify-content: center;
				image {
					width: 32upx;
					height: 32upx;
					margin-right: 22upx;
				}
			}
		}
	}
</style>
