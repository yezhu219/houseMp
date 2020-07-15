<template>
	<view class="page-counsoler">
		<button open-type="contact" class="chat" @contact="handleContact">客服</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleContact(e) {
				console.log(e,'sdfdsf')
			}
		}
	}
</script>

<style lang="scss">
.chat {
	width: 100upx;
	font-size: 22upx;
}
</style>
