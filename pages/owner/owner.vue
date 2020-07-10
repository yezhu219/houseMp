<template>
	<view class="page">
		<view class="box bg-f bs10 fsb">
			<image src="../../static/icon/wdfb.png" mode="" @click="add"></image>
			<image src="../../static/icon/glfb.png" mode="" @click="add"></image>
			<image src="../../static/icon/wdgw.png" mode="" @click="add"></image>
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
			add() {
				uni.navigateTo({
					url:'/pages/addNews/addNews'
				})
			}
		}
	}
</script>

<style lang="scss">
.box {
	padding:54upx 36upx ;
	image {
		width: 172upx;
		height: 172upx;
	}
}
</style>
