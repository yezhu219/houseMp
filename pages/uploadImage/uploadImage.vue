<template>
	<view class="">
		<view class="pdtb-30 tac bg-f">
			请上传房源图片
		</view>
		<view class="form-container mb-30">
			<view class="mb-30">房源图片<text class="c-ff6">*</text></view>
			<view class="imgbox">
				<view class="img-item" :key="item" v-for="(item,index) in imgs">
					<image :src="item" class="img"></image>
					<image src="../../static/icon/gb.png"  class="gb" @click="del(index)"></image>
				</view>
				<image src="../../static/icon/add.png" mode="" @click="pickImg"></image>
			</view>
		</view>
		<view class="pdtb-30 bg-f fz24 c-ff6 tac" @click="toMy">提交审核</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs:[],
				id:''
			}
		},
		onLoad(op) {
			this.id = op.id
		},
		methods: {
			pickImg() {
				let _this = this
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
								console.log(chooseImageRes,'file')
				        uni.uploadFile({
				            url: 'https://olvintage.com/api/upload/', 
				            filePath: tempFilePaths[0],
				            name: 'file',
				            header:{
				            	'Content-Type': 'multipart/form-data',
				            	'Authorization':'jwt '+ uni.getStorageSync('token')
				            },
				            success: (uploadFileRes) => {
				               let data = JSON.parse(uploadFileRes.data) 
											 _this.imgs.push(data.url)
											 _this.upload(data.url)
				            }
				        });
				    }
				})
			},
			del(data) {
				this.imgs.splice(data,1)
			},
			async upload(url) {
				let res = await this.$api.uploadHouseImg({
					housing:this.id,
					url
				})
			},
			toMy() {
				uni.redirectTo({
					url:'/pages/myNews/myNews'
				})
			}
		}
	}
</script>

<style>
page {
	background-color: #f9f9f9;
}
</style>
