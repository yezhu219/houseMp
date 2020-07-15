<template>
	<view class="page my">
		<view class="user line-b df-cc">
			<image :src="user.avatar_url" @click="saveImg"></image>
			<view class="fz26 fw-b df-ac" v-if="!isEdit" @click="isEdit=true">{{user.nick_name}} 
				<image src="../../static/icon/edit.png" class="u-edit" mode=""></image>
			</view>
			<view class="fz26 fw-b df-ac" v-if="isEdit">
				<input type="text" v-model="user.nick_name" />
				<image src="../../static/icon/save.png" class="u-edit" @click="save"></image>
			</view>
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
				user:{
					avatar_url:'',
					nick_name:''
				},
				isEdit:false
			}
		},
		onShow() {
			this.init()
		},
		methods: {
			async init() {
				let res = await this.$api.getUserInfo()
				if(res) {
					console.log(res,'111')
					this.user = res.data
				}
			},
			toMyNews(type) {
				uni.navigateTo({
					url:'/pages/'+type+'/'+type
				})
			},
			login() {
				
			},
			async save() {
				this.isEdit = false
				let res = await this.$api.updateUser(this.user)
				if(res) {
					uni.showToast({
						title:'修改成功',
					})
				}
			},
			async saveImg() {
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
				            	// 'Content-Type': 'application/json',
				            	'Content-Type': 'multipart/form-data',
				            	'Authorization':'jwt '+ uni.getStorageSync('token')
				            },
				            success: async (uploadFileRes) => {
				               let data = JSON.parse(uploadFileRes.data) 
											 console.log(uploadFileRes,'888')
											 _this.user.avatar_url = data.url;
											let res = await this.$api.updateUser(_this.user)
											if(res) {
												uni.showToast({
													title:'修改成功',
												})
											}
				            }
				        });
				    }
				})
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
			border-radius: 10upx;
		}
		input {
			border: 1px solid #ccc;
			height: 40upx;
			line-height: 40upx;
			padding-left: 10upx;
			border-radius: 10upx;
			
		}
		.u-edit {
			width: 40upx;
			height: 40upx;
			margin-bottom: 0;
			margin-left: 20upx;
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
