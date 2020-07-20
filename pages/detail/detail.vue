<template>
	<view class="page-detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in house.album" :key="item.id">
				<view class="swiper-item"><image :src="item.url" mode=""></image></view>
			</swiper-item>
		</swiper>
		<view class="main">
			<image src="../../static/icon/c1.png" mode="" class="icon-collect" v-if="isCollect" @click="handleCollect(1)"></image>
			<image src="../../static/icon/c2.png" class="icon-collect" v-if="!isCollect"  @click="handleCollect(2)"></image>
			<view class="mb-24"><text class="c-ff6" style="margin-right: 10upx;">{{house.rent}} </text><text class="c-666">{{house.yafu}}</text></view>
			<view class="title">{{house.title}}</view>
			<view class="tag df">
				<!-- <view class="tag-item">{{house.housing_type==1?'商铺出租':house.housing_type==2?'商铺出售':'生意转让'}}</view> -->
				<view class="tag-item">{{house.housing_type}}</view>
				<!-- <view class="tag-item">转让</view>
				<view class="tag-item">转让</view> -->
			</view>
			<view class="info">
				<view class="info-item" v-if="house.housing_type!=2">
					<view class="mb-15">{{house.zhaunrang}}</view>
					<view class="c-666">转让费</view>
				</view>
				<view class="info-item" v-if="house.housing_type==2">
					<view class="mb-15">{{house.rent}}万</view>
					<view class="c-666">租金</view>
				</view>
				<view class="info-item">
					<view class="mb-15">{{house.built_up_area}}m²</view>
					<view class="c-666">面积</view>
				</view>
				<view class="info-item" v-if="house.housing_type==1">
					<view class="mb-15">{{house.yafu}}</view>
					<view class="c-666">付款方式</view>
				</view>
				<view class="info-item" v-if="house.housing_type!=1">
					<view class="mb-15">{{house.day_rent}}</view>
					<view class="c-666">日租金</view>
				</view>
			</view>
			<view class="title">房源须知</view>
			<view class="note mb-24" v-if="house.housing_type!=2">
				<view class="note-item">
					<view class="n-left">
						<image src="../../static/icon/l1.png" mode=""></image>
						<text class="mr-40">商铺类型</text>
					</view>
					<text>{{house.shop_type}}</text>
				</view>
				<view class="note-item">
					<view class="n-left">
						<image src="../../static/icon/l2.png" mode=""></image>
						<text class="mr-40">当前状态</text>
					</view>
					<text>{{house.business_status}}</text>
				</view>
				<view class="note-item">
					<view class="n-left">
						<image src="../../static/icon/l3.png" mode=""></image>
						<text class="mr-40">规格参数</text>
					</view>
					
					<text>面宽{{house.kuan}}*进深{{house.shen}}*层高{{house.gao}}</text>
				</view>
				<view class="note-item" v-if="house.housing_type==1">
					<image src="../../static/icon/i2.png" mode=""></image>
					<text class="mr-40">剩余租期</text>
					<text>{{house.shengyuzuqi}}</text>
				</view>
				<view class="note-item" v-if="house.housing_type==1">
					<image src="../../static/icon/i2.png" mode=""></image>
					<text class="mr-40">客流</text>
					<text>{{house.keliu}}</text>
				</view>
			</view>
			<view class="note mb-24" v-if="house.housing_type==2">
				<view class="note-item">
					<image src="../../static/icon/i2.png" mode=""></image>
					<text class="mr-40">楼层</text>
					<text>{{house.floor}}</text>
				</view>
				<view class="note-item">
					<image src="../../static/icon/i2.png" mode=""></image>
					<text class="mr-40">层高</text>
					<text>{{house.gao}}</text>
				</view>
				<view class="note-item">
					<image src="../../static/icon/i2.png" mode=""></image>
					<text class="mr-40">起租期</text>
					<text>{{house.free_rent_time}}</text>
				</view>
			</view>
			<view class="title">房源须知</view>
			<view class="c-666 mb-30" style="line-height:1.5">{{house.desc}}</view>
			<!-- <view class="title">配套设施</view>
			<view class="eqment mb-30">
				<view class="eq-item df-cc">
					<image src="../../static/icon/i1.png" mode=""></image>
					<view class="c-666">空调</view>
				</view>
			</view> -->
			<view>
				<map style="width: 100%; height: 300px;" 
					:latitude="house.latitude"
					:longitude="house.longitude" 
					:markers="markers"></map>
			</view>
			<view class="fix-foot">
				<user :datas="staff"></user>
			</view>
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
				house:{},
				staff:{},
				markers: [
					{
						iconPath: "/static/icon/p.png",
						id: 0,
						latitude: "",
						longitude: "",
						width: 50,
						height: 50
					},
				],
				type:''
			}
		},
		onLoad(op) {
			this.id = op.id
			this.type = op.type
		},
		mounted() {
			this.init()
			this.getStatus()
			this.getStaff()
		},
		methods: {
			async init() {
				let res = null
				if(this.type) {
					res = await this.$api.getHouse(this.id)
				}else {
				 res = await this.$api.getHouseById(this.id)
				}
				if(res) {
					this.house = res
					this.markers.forEach(item=>{
						item.latitude = res.latitude
						item.longitude = res.longitude
					})
				}
			},
			async getStaff() {
				let res = await this.$api.getStaff({id:this.id})
				if(res&&res.data) {
					this.staff = res.data
				}
			},
			async getStatus() {
				let res = await this.$api.getCollectStatus({id:this.id})
				if(res&&res.data) {
					this.isCollect = res.data.is_collect
					this.collectId = res.data.id
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
					res= await this.$api.delCollect(this.collectId)
					msg='取消收藏成功'
				}
				uni.showToast({
					icon:'none',
					title:msg
				})
				this.getStatus()
			}
		},
		components: {
			user
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
.page-detail {
	padding-bottom: 120upx;
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
			display: flex;
			color: #666;
			display: flex;
			align-items: center;
			margin-bottom: 20upx;
			image {
				width: 40upx;
				height: 40upx;
				margin-right: 10upx;
			}
			.n-left {
				width: 240upx;
				display: flex;
				align-items: center;
				text {
					margin-right: 0;
				}
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
	.fix-foot {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding-left: 30upx;
	}
}
</style>
