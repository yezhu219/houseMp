<template>
	<view class="">
		<view class="form-container">
			<view class="form-item">
				<view class="label">看房地址<text class="c-ff6">*</text></view>
				<view class="right">
					<input type="text" v-model="addData.address" placeholder="请输入地址"  />
				</view>
			</view>
			<view class="form-item">
				<view class="label">预约时间<text class="c-ff6">*</text></view>
				<view class="right">
					<picker mode="date" :value="addData.appointment_date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view :class="{'c-999':!addData.appointment_date}">{{addData.appointment_date?addData.appointment_date:'请选择'}}</view>
					</picker>
				</view>
			</view>
			<view class="form-item">
				<view class="label">房东姓名<text class="c-ff6">*</text></view>
				<view class="right">
					<input type="text" v-model="addData.name" placeholder="请输入"  />
				</view>
			</view>
			<view class="form-item">
				<view class="label">房东电话<text class="c-ff6">*</text></view>
				<view class="right">
					<input type="text" v-model="addData.phone" placeholder="请输入"  />
				</view>
			</view>
			<view class="pdtb-30 bg-fe fz24 c-ff6 tac" @click="addItem">完成</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
			            format: true
			        })
			return {
				addData: {
					address:'',
					name:'',
					phone:'',
					appointment_date:''
				},
				date:currentDate,
				id:''
			}
		},
		onLoad(op) {
			this.id = op.id
		},
		mounted() {
			if(this.id) {
				this.init()
			}
		},
		methods: {
			bindDateChange(e) {
					this.addData.appointment_date = e.target.value
			},
			async init() {
				let res = await this.$api.getAppointDetail(this.id)
				if(res) {
					this.addData = res
				}
			},
			async addItem() {
				let res = null
				if(this.id) {
					res = await this.$api.updateAppoint(this.addData)
				}else {
					res = await this.$api.addAppoint(this.addData)
				}
				if(res) {
					uni.redirectTo({
						url:'/pages/appoint/appoint'
					})
				}
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
						year = year - 60;
				} else if (type === 'end') {
						year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		},
		computed: {
				startDate() {
						return this.getDate('start');
				},
				endDate() {
						return this.getDate('end');
				}
		},
	}
</script>

<style>

</style>
