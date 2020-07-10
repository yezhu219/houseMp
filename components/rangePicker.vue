<template>
	<view class="picker">
		<view class="bg-range"></view>
		<view class="rangePicker">
			<view class="top-header df">
				<view class="top-item">
					<view>装修</view>
					<view class="c-ff6">毛坯</view>
				</view>
				<view class="top-item">
					<view>类型</view>
					<view class="c-ff6">纯写字楼</view>
				</view>
				<view class="top-item">
					<view>性质</view>
					<view class="c-ff6">新房</view>
				</view>
			</view>
			<view>
				<picker-view class="myPicker" :indicatorStyle="indicatorStyle"  :value="value" @change="bindChange">
					<picker-view-column>
							<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
					</picker-view-column>
					<!-- <picker-view-column>
							<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
					</picker-view-column>
					<picker-view-column>
							<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
					</picker-view-column> -->
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				years:[1,2,3,4],
				value: "",
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
			};
		},
		methods: {
			bindChange() {
				
			}
		}
	}
</script>

<style lang="scss">
.picker {
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	.bg-range {
		position: fixed;
		width: 100vw;
		height: 100vh;
		z-index: 1000;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.3);
	}
	.rangePicker {
		position: absolute;
		bottom: 0;
		width: 100%;
		left: 0;
		height: 50%;
		z-index: 1100;
		background-color: #fff;
		.top-header {
			.top-item {
				flex: 0 0 33.33%;
				text-align: center;
			}
		}
		.myPicker {
			width: 100%;
			height: 50%;
			background-color: rgba(255, 255, 255, 1);
			
			.item {
				text-align: center;
				width: 100%;
				height: 88upx;
				line-height: 88upx;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 40upx;
			}
		}
	}
}
</style>
