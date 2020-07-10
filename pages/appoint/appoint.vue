<template>
	<view class="page-appoint">
		<view class="appoint-item" v-for="item in list" :key="item.id" @click="toDetail(item)">
			<view class="">预约时间：{{item.appointment_date}}</view>
			<view>地址：{{item.address}}</view>
			<view>姓名：{{item.name}}</view>
			<view>电话：{{item.phone}}</view>
			<image src="../../static/icon/close.png" mode="" @click="del(item.id)"></image>
			<image src="../../static/icon/edit.png" mode="" @click="toEdit(item.id)" class="edit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		created() {
			this.init()
		},
		methods: {
			async init() {
				let res = await this.$api.getAppointList()
				if(res) {
					this.list = res
				}
			},
			toDetail(data) {
				uni.navigateTo({
					url:'/pages/addAppoint/addAppoint?id='+data.id
				})
			},
			async del(data) {
				let res = await this.$api.delAppoint(data)
				if(res) {
					this.init()
				}
			},
			toEdit(data) {
				uni.navigateTo({
					url:'/pages/addAppoint/addAppoint?id='+data
				})
			}
		}
	}
</script>

<style lang="scss">
.appoint-item {
	background-color: #fff;
	margin-bottom: 20upx;
	padding: 20upx;
	padding-left: 40upx;
	position: relative;
	>view {
		margin-bottom: 20upx;
	}
	image {
		width: 40upx;
		height: 40upx;
		position: absolute;
		top: 20upx;
		right: 40upx;
		&.edit {
			right: 120upx;
		}
	}
}
</style>
