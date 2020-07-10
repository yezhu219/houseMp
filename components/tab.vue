<template>
	<view class="tab df">
		<view class="tab-item" v-for="(item,index) in datas">{{item.name}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			datas: {
				type: Object
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.tab {
	.tab-item {
		width: ;
	}
}
</style>
