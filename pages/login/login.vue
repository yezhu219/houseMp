<template>
	<view class="login pd-20">
		<!-- 如果只是展示用户头像昵称，可以使用 <open-data /> 组件 -->
		<view class="title mb-20 tac fz26">
			<!-- <view class="fz18 mb-20 fw-400">让球鞋飞申请获</view>
			<view class="fz20 fw-600 mb-10">获取你的昵称、头像、地区及性别</view> -->
			您还未登录，请先授权登录
		</view>
		<view class="user mb-20">
			<view class="user-img"><open-data type="userAvatarUrl"></open-data></view>
			<open-data type="userNickName"></open-data>
		</view>
		
			<button type="primary" class="mb-20"  open-type="getUserInfo" @getuserinfo="login">授权登录</button>
			<button type="default" @click="goBack">暂不登录</button>
		<!-- <view class=" pd-20" style="padding-left:100upx"> -->
			<!-- <button type="default" size="mini" > -->
				<!-- <navigator open-type="exit" target="miniProgram">暂不登录</navigator> -->
			<!-- </button> -->
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login(e) {
				console.log(e,"eeee")
				let _this = this
				if(!e.detail.userInfo){
					uni.showToast({
						title:'您拒绝了授权'
					})
					return
				}
				wx.login({
					async success(res) {
						let userInfo = e.detail.userInfo
						if(res.code) {
							let code = res.code
							let shop_id = '9986737883062651401706261418474'
							let token=  await  _this.$api.login({js_code:code,shop_id})
							if(token.data&&token.data.token) {
								uni.setStorageSync('token',token.data.token)
								uni.setStorageSync('isNew',token.data.new_user)
								uni.setStorageSync('userInfo',userInfo)
								let result= await _this.$api.updateUser({nick_name:userInfo.nickName,avatar_url:userInfo.avatarUrl})
								if(result) {
									uni.switchTab({
											url:'/pages/index/index'
									})
								}
							}
						}
					},
					fail(err) {
						console.log(err,'err')
					}
				})
			},
			goBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
.login {
	padding-top: 200upx;
	.user {
		display: flex;
		justify-content: center;
		align-items: center;
		padding:40upx 0;
		border-top: 1upx solid #ccc;
		border-bottom: 1upx solid #ccc;
		.user-img {
			width: 80upx;
			height: 80upx;
			border-radius: 50%;
			overflow: hidden;
			margin-right: 20px;
		}
	}
	navigator {
		// padding:10upx 40upx;
		border: 2upx solid #ccc;
		border-radius: 10upx;
		line-height: 2.1;
		font-size: 13px;
		padding: 0 1.34em
	}
}
</style>
