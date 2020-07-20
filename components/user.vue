<template>
	<view class="userCard bg-f fsb" @click="toDetail">
		<view class="df-ac">
			<image :src="datas.staff_head" mode="" class="avatar"></image>
			<view class="">
				<view class="df-ac mb-24">
					<text style="margin-right: 10upx;">{{datas.real_name}}</text>
				</view>
				<!-- <view class="mb-24"><uni-rate size="18" value="5"></uni-rate></view> -->
				<view class="c-666">{{datas.phone}}</view>
			</view>
		</view>
		<view class="call" @click.stop="makeCall">拨打电话</view>
		<!-- <view class="richbox">
			 <rich-text :nodes="strings"></rich-text>
		</view> -->
	</view>
</template>
<script>
import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		props: {
			datas: {
				type:Object
			}
		},
		data() {
			return {
				strings: 'map 组件使用的经纬度是国测局坐标，调用 uni.getLocation 接口需要指定 type 为 gcj02。<map> 组件在不同平台的底层引擎是不同的：H5、微信小程序为腾讯地图；App、支付宝小程序为高德地图；百度小程序、快应用为百度地图。app-vue也可以使用百度地图，在manifest中配置，打包后生效，但app-nvue只支持高德地图。另外选择地图、查看地图位置的API也仅支持高德地图。App端如无特殊必要，建议使用高德地图。map 组默认的api是参考微信小程序的，如需要使用plus.map，可以通过$getAppMap获取原生地图对象，详见。注意nvue的map组件不是plus.map对象，无法使用'
			};
		},
		methods:{
			toDetail() {
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			},
			makeCall() {
				wx.makePhoneCall({
				  phoneNumber: this.datas.phone //仅为示例，并非真实的电话号码
				})
			}
		},
		components: {
			uniRate
		}
	}
</script>

<style lang="scss">
.userCard {
	.avatar {
		width: 120upx;
		height: 120upx;
		margin-right: 20upx;
		border-radius: 50%;
	}
	.icon {
		width: 80upx;
		height: 40upx;
	}
	.richbox {
		height: 300px;
		background-color: #f5f5f5;
		padding: 20upx;
	}
	.call {
		background-color: rgb(179, 68, 32);
		color: #fff;
		width: 200upx;
		height: 120upx;
		line-height: 120upx;
		text-align: center;
	}
}
</style>
