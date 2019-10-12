<template>
	<view class="index">
		<view class="header pr">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" >
				<swiper-item>
					<view class="swiper-item">1</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">2</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">3</view>
				</swiper-item>
			</swiper>
			<view class="search pa">
				<xflSelect :list= "list" :clearable="false"></xflSelect>
				<input type="text" placeholder="请输入搜索内容">
				<text class="iconfont icon-sousuo"></text>
			</view>
		</view>
		<view class="nav-box">
			<view class="nav-item" v-for="item in 10" :key="item">
				<text class="iconfont icon-building_11 " style="color: #1296db;font-size: 40px;"></text>
				<text>新楼盘</text>
			</view>
		</view>
	</view>
</template>

<script>
	import xflSelect from '../../components/xfl-select/xfl-select.vue'
	export default {
		data() {
			return {
				list:['二手房','新楼房','出售']
			}
		},
		onLoad() {

		},
		methods: {

		},
		Page() {
			
		},
		components: { 
			xflSelect 
		}
	}
</script>

<style lang="scss">
	.index {
		swiper-item {
			height: 320rpx;
			background-color: #F0AD4E;
		}
		.header {
			margin-bottom:38rpx;
			.search {
				width: 694.44rpx;
				height: 62.5rpx;
				bottom: -31rpx;
				left: 50%;
				transform: translateX(-50%);
				border-radius:5px;
				box-shadow: 1px 1px 1px #808080;
				background-color: #fff;
				padding: 0 10rpx;
				display:flex;
				font-size:12px;
				.show-box {
					width: 140.77rpx;
					border:none;
					height: 100%;
				}
				input {
					width: 100%;
					height:100%;
					padding-left:30rpx;
				}
				.icon-sousuo {
					position: absolute;
					right: 20rpx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
		.nav-box {
			padding: 10rpx 27.77rpx;
			display:flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.nav-item {
				display:flex;
				flex-direction:column;
				flex: 0 0 20%;
				align-items: center;
				.iconfont {
					fonts-size: 40px;
				}
			}
		}
	}


</style>
