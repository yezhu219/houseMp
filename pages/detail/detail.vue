<template>
	<view class=" page-detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item"><image src="../../static/icon/img.png" mode=""></image></view>
			</swiper-item>
		</swiper>
		<view class="main">
			<image src="../../static/icon/c1.png" mode="" class="icon-collect" v-if="isCollect" @click="handleCollect(2)"></image>
			<image src="../../static/icon/c2.png" class="icon-collect" v-if="!isCollect"  @click="handleCollect(2)"></image>
			<view class="mb-24"><text class="c-ff6">{{house.rent}} </text><text class="c-666">{{house.yafu}}</text></view>
			<view class="title">{{house.title}}</view>
			<view class="tag df">
				<view class="tag-item">转让</view>
				<view class="tag-item">转让</view>
				<view class="tag-item">转让</view>
			</view>
			<view class="info">
				<view class="info-item">
					<view class="mb-15">{{house.zhaunrang}}万</view>
					<view class="c-666">转让费</view>
				</view>
				<view class="info-item">
					<view class="mb-15">{{house.built_up_area}}m²</view>
					<view class="c-666">面积</view>
				</view>
				<view class="info-item">
					<view class="mb-15">{{house.floor}}层</view>
					<view class="c-666">楼层</view>
				</view>
			</view>
			<view class="title">房源须知</view>
			<view class="note mb-24">
				<view class="note-item">
					<image src="../../static/icon/i2.png" mode=""></image>
					<text class="mr-40">商铺类型</text>
					<text>{{house.shop_type}}</text>
				</view>
				<view class="note-item">
					<image src="../../static/icon/i2.png" mode=""></image>
					<text class="mr-40">当前状态</text>
					<text>临街门面</text>
				</view>
				<view class="note-item">
					<image src="../../static/icon/i2.png" mode=""></image>
					<text class="mr-40">规格参数</text>
					<text>临街门面</text>
				</view>
				<view class="note-item">
					<image src="../../static/icon/i2.png" mode=""></image>
					<text class="mr-40">剩余租期</text>
					<text>3个月</text>
				</view>
			</view>
			<view class="title">配套设施</view>
			<view class="eqment mb-30">
				<view class="eq-item df-cc">
					<image src="../../static/icon/i1.png" mode=""></image>
					<view class="c-666">空调</view>
				</view>
			</view>
			<view>
				<user></user>
			</view>
		</view>
		<view>
			<map style="width: 100%; height: 300px;" ></map>
		</view>
	</view>
</template>

<script>
	import user from '../../components/user.vue'
	export default {
		data() {
			return {
				isCollect:false,
				id:'',
				house:{}
			}
		},
		onLoad(op) {
			this.id = op.id
		},
		mounted() {
			this.init()
		},
		methods: {
			async init() {
				console.log(this.id,'--')
				let res = await this.$api.getHouseById(this.id)
				if(res) {
					this.house = res
				}
			},
			async handleCollect(data) {
				let res = null
				let msg = ''
				console.log(data,'--')
				if(data==2) {
					res = await this.$api.addCollect({housing:this.id})
					msg = '收藏成功'
				}else {
					res= await this.$api.delCollect(this.id)
					msg='取消收藏成功'
				}
				uni.showToast({
					icon:'none',
					title:msg
				})
			}
		},
		components: {
			user
		}
	}
</script>

<style lang="scss">
.page-detail {
	.swiper-item {
		image {
			width: 100%;
			height: 400upx;
		}
	}
	.main {
		padding: 40upx;
		position: relative;
		.icon-collect {
			position: absolute;
			width: 50upx;
			height: 50upx;
			top: 24upx;
			right: 40upx;
		}
	}
	.title {
		font-size: 32upx;
		font-weight: bold;
		margin-bottom: 20upx;
	}
	.tag {
		margin-top: 20upx;
		margin-bottom: 30upx;
		.tag-item {
			padding: 10upx 20upx;
			background-color: rgb(186, 222, 252);
			color: rgb(33, 150, 243);
			margin-right: 20upx;
		}
	}
	.info {
		padding:30upx 0;
		display: flex;
		border-top: 1upx solid #dedede;
		border-bottom: 1upx solid #dedede;
		margin-bottom: 20upx;
		.info-item {
			flex:0 0 33.33%;
			text-align: center;
		}
	}
	.note {
		.note-item {
			color: #666;
			display: flex;
			align-items: center;
			image {
				width: 40upx;
				height: 40upx;
				margin-right: 10upx;
			}
		}
	}
	.eqment {
		display: flex;
		flex-wrap: wrap;
		.eq-item {
			flex:0 0 20%; 
			flex-direction: column;
			image {
				width: 100upx;
				height: 100upx;
				
			}
		}
	}
}
</style>
