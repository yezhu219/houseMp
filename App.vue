<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("/static/css/reset.css");
	@import url("/static/css/public.css");
	view,input,textarea,
	text {
		font-size: 28upx;
		box-sizing: border-box;
	}
	.search {
		position: relative;
		
		image {
			width: 40upx;
			height: 40upx;
			position: absolute;
			top: 50%;
			margin-top: -20upx;
			left: 30upx;
		}
		input {
			height: 80upx;
			width: 100%;
			padding:0 30upx;
			background-color: #fff;
			border-radius:40upx;
			padding-left: 100upx;
		}
	}
	.form-container {
		padding:36upx 60upx ;
		background-color: #fff;
		.imgbox {
			image {
				width: 130upx;
				height: 130upx;
				margin-right: 20upx;
			}
		}
	}
	.form-item {
		display: flex;
		align-items: center;
		padding-bottom: 24upx;
		font-size: 24upx;
		background-color: #fff;
		&.top {
			align-items: flex-start;
		}
		.label {
			// margin-right: 20upx;
			width: 140upx;
			.red {
				color: #000;
			}
		}
		.right {
			flex: 1;
			.holder {
				height: 60upx;
				line-height: 60upx;
				background-color: rgb(242, 247, 255);
				padding-left: 20upx;
			}
			input {
				height: 60upx;
				line-height: 60upx;
			}
			.check-item {
				flex: 0 0 50%;
				margin-bottom: 40upx;
				color: #999;
				.isCheck {
					color: #000;
				}
				image {
					width: 25upx;
					height: 25upx;
					margin-right: 20upx;
				}
			}
		}
	}
</style>
