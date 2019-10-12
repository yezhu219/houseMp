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

<style>
	@import url("./style/public.scss");
	/*每个页面公共css */
	page {
		font-size: 14px;
		color:#333333;
		widows: 100%;
		height: 100%;
		background-color: #fff;
	}
	view {
		box-sizing: border-box;
	}
</style>
