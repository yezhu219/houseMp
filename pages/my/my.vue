<template>
	<view class="page my">
		<view class="user line-b df-cc">
			<image src="../../static/icon/img.png" mode=""></image>
			<view class="fz26 fw-b">用户xxxx2380</view>
		</view>
		<view class="cell fsb" @click="toMyNews('myNews')">
			<view class="cell-left" >
				<image src="../../static/icon/m1.png" mode=""></image>
				<text>我的发布</text>
			</view>
			<image src="../../static/icon/right.png" mode="" class="arrow-right"></image>
		</view>
		<view class="cell fsb"  @click="toMyNews('collection')">
			<view class="cell-left">
				<image src="../../static/icon/m2.png" mode=""></image>
				<text>我的收藏</text>
			</view>
			<image src="../../static/icon/right.png" mode="" class="arrow-right"></image>
		</view>
		<view class="cell fsb"  @click="toMyNews('appoint')">
			<view class="cell-left">
				<image src="../../static/icon/m3.png" mode=""></image>
				<text>预约信息</text>
			</view>
			<image src="../../static/icon/right.png" mode="" class="arrow-right"></image>
		</view>
		<view class="cell fsb"  @click="toMyNews('counsoler')">
			<view class="cell-left">
				<image src="../../static/icon/m4.png" mode=""></image>
				<text>我的顾问</text>
			</view>
			<image src="../../static/icon/right.png" mode="" class="arrow-right"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toMyNews(type) {
				uni.navigateTo({
					url:'/pages/'+type+'/'+type
				})
			},
			login() {
				
			}
		}
	}
</script>

<style lang="scss">
.my {
	&.page {
		background-color: #fff;
		padding: 0 30upx;
	}
	.user {
		padding-top: 64upx;
		padding-bottom: 32upx;
		flex-direction: column;
		image {
			width: 130upx;
			height: 130upx;
			margin-bottom: 20upx;
		}
	}
	.cell {
		padding: 30upx 34upx 20upx 36upx;
		border-bottom: 1px solid #dedede;
		.arrow-right {
			width: 16upx;
			height: 28upx;
		}
		.cell-left {
			font-size: 20upx;
			display: flex;
			align-items: center;
			image {
				width: 52upx;
				height: 50upx;
				margin-right: 16upx;
			}
		}
	}
}
</style>
