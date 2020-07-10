<template>
	<view class="page addNews">
		<view class="form-container mb-30">
			<view class="form-item">
				<view class="label">分类<text class="c-ff6">*</text></view>
				<view class="right">
					<picker @change="bindPickerChange"  :value="index" :range-key="'name'" :range="transType">
							<view class="holder">{{addData.housing_type?addData.housing_type:'请选择'}}</view>
					</picker>
				</view>
			</view>
			<view class="form-item line-b">
				<view class="label" >所在区域<text class="c-ff6">*</text></view>
				<view class="right" >
					<picker @change="regionChange"  :value="index" :range-key="'name'" :range="regionList">
							<view class="holder">{{getType(addData.region)}}</view>
					</picker>
						<!-- <view class="holder">{{addData.region?addData.region:'请选择'}}</view> -->
				</view>
			</view>
			<view class="form-item line-b">
				<view class="label" >商铺地址<text class="c-ff6">*</text></view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.address" />
				</view>
			</view>
			<view class="form-item mt-20">
				<view class="label">标题<text class="c-ff6">*</text></view>
				<view class="right">
					<input type="text" v-model="addData.title" placeholder="请输入标题"  />
				</view>
			</view>
		</view>
		<view class="form-container mb-30">
			<view class="mb-30">封面图<text class="c-ff6">*</text>（最多6张）</view>
			<view class="imgbox">
				<!-- <image :src="img"  v-for="(img,index) in addData.thumb" :key="index"></image> -->
				<image :src="addData.thumb" v-if="addData.thumb"></image>
				<image src="../../static/icon/add.png" mode="" @click="selImage"></image>
			</view>
		</view>
		<view class="form-container mb-30">
			<view class="form-item mt-20 line-b">
				<view class="label">楼层</view>
				<view class="right">
					<!-- <input type="text" placeholder="请输入"  /> -->
					<picker @change="floorChange" :value="index"  :range="floorList">
							<view class="holder">{{addData.floor?addData.floor:'请选择'}}层</view>
					</picker>
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">总楼层</view>
				<view class="right">
					<!-- <input type="text" placeholder="请输入"  /> -->
					<picker @change="totalFloorChange" :value="index"  :range="floorList">
							<view class="holder">{{totalFloor?totalFloor:'请选择'}}层</view>
					</picker>
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">商铺类型</view>
				<view class="right">
					<picker @change="shopTypeChange" :value="index" :range-key="'name'"  :range="businessHouseType">
							<view class="holder">{{addData.shop_type?addData.shop_type:'请选择'}}</view>
					</picker>
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">商铺性质</view>
				<view class="right">
					<picker @change="shopNatureChange" :value="index" range-key="name" :range="houseType">
							<view class="holder">{{addData.shop_nature?addData.shop_nature:'请选择'}}</view>
					</picker>
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">建筑面积</view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.built_up_area" />
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">是否临街</view>
				<view class="right">
					<picker @change="yeornoChange" :value="index" range-key="name" :range="yesornoList">
							<view class="holder">{{formateType(addData.close_street)}}</view>
					</picker>
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">面宽</view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.kuan" />
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">层高</view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.gao" />
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">进深</view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.shen" />
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">经营状态</view>
				<view class="right">
					<picker @change="stateChange" :value="index" :range-key="'name'" :range="stateList">
							<view class="holder">{{addData.business_status?addData.business_status:'请选择'}}</view>
					</picker>
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">经营行业</view>
				<view class="right">
					<picker @change="industyChange" :value="index" :range-key="'name'" :range="industyList">
							<view class="holder">{{addData.business_industry?addData.business_industry:'请选择'}}</view>
					</picker>
				</view>
			</view>
			<view class="form-item mt-20 line-b" v-if="type==3">
				<view class="label">售价</view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.shop_price" />
				</view>
			</view><view class="form-item mt-20 line-b" v-else>
				<view class="label">租金</view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.rent" />
				</view>
			</view>
			<view class="form-item mt-20 line-b"  v-if="type==3">
				<view class="label">预期收益</view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.yuqi_price" />
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">押付方式</view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.yafu" />
				</view>
			</view>
			<view v-if="type==1">
				<view class="form-item mt-20 line-b">
					<view class="label">转让费</view>
					<view class="right">
						<input type="text" placeholder="请输入" v-model="addData.zhaunrang" />
					</view>
				</view>
				<view class="form-item mt-20 line-b">
					<view class="label">剩余租期</view>
					<view class="right">
						<input type="text" placeholder="请输入" v-model="addData.shengyuzuqi" />
					</view>
				</view>
			</view>
			<view v-if="type==2">
				<view class="form-item mt-20 line-b">
					<view class="label">起租期</view>
					<view class="right">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange1">
								<view class="uni-input">{{addData.free_rent_time}}</view>
						</picker>
						<!-- <input type="text" placeholder="请输入" v-model="addData.free_rent_time" /> -->
					</view>
				</view>
				<view class="form-item mt-20 line-b">
					<view class="label">免租期</view>
					<view class="right">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange2">
								<view class="uni-input">{{addData.mian_rent_time}}</view>
						</picker>
						<!-- <input type="text" placeholder="请输入"  v-model="addData.free_rent_time"/> -->
					</view>
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">物业费</view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.wuye" />
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">水费</view>
				<view class="right">
					<input type="text" placeholder="请输入"  v-model="addData.shui"/>
				</view>
			</view>
			<view class="form-item mt-20 line-b">
				<view class="label">电费</view>
				<view class="right">
					<input type="text" placeholder="请输入" v-model="addData.dian" />
				</view>
			</view>
			<!-- <view class="form-item top mt-20">
				<view class="label">配套设施</view>
				<view class="right df wrap">
					<view class="check-item df-ac" v-for="check in checkArr" :key="check.id" @click="changeCheck(check)">
						<image  v-if="check.isCheck" src="../../static/icon/check.png" mode=""></image>
						<image  v-else src="../../static/icon/unCheck.png" mode=""></image>
						<text :class="{isCheck:check.isCheck}">{{check.name}}</text>
					</view>
				</view>
			</view> -->
		</view>
		<view class="form-container mb-30">选择地图</view>
		<view class="mb-30">
			<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
		</view>
		<view class="pdtb-30 bg-f fz24 c-ff6 tac" @click="addItem">提交审核</view>
		<!-- <rangePicker></rangePicker> -->
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF"></simple-address>
	</view>
</template>

<script>
	import simpleAddress from "../../components/simple-address/simple-address.vue"
	import *as type from '../../util/type.js'
	export default {
		data() {
			const currentDate = this.getDate({
								format: true
						})
			return {
				transType: type.transType,
				houseType: type.houseType,
				yesornoList:type.yeornoList,
				industyList:type.industyList,
				businessHouseType:type.businessHouseType,
				regionList:[],
				index: 0,
				current:'',
				checkArr:[
					{id:1,name:'客梯',isCheck:true},
					{id:2,name:'货梯',isCheck:false},
					{id:3,name:'中央空调',isCheck:false},
					{id:4,name:'提车位',isCheck:false},
					{id:5,name:'天然气',isCheck:false},
					{id:6,name:'电话/网络',isCheck:false},
					{id:7,name:'暖气',isCheck:false},
					{id:8,name:'扶梯',isCheck:false},
					{id:9,name:'上水',isCheck:false},
					{id:10,name:'下水',isCheck:false},
					{id:11,name:'排烟',isCheck:false},
					{id:12,name:'排污',isCheck:false},
					{id:13,name:'管煤',isCheck:false},
					{id:14,name:'280V',isCheck:false},
					{id:15,name:'可明火',isCheck:false},
					{id:16,name:'外摆区',isCheck:false},
				],
				imgs:[],
				cityPickerValueDefault: [0, 0, 1],
				currentTransType:'',
				floorList:[],
				floor:'',
				totalFloor:'',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [
					{
						latitude: 39.909,
						longitude: 116.39742,
						iconPath: '../../../static/location.png'
					}, 
					{
						latitude: 39.90,
						longitude: 116.39,
						iconPath: '../../../static/location.png'
					},
				],
				state:'',
				house_type:'',
				stateList:type.stateList,
				type:1, //1 生意转让 2 商铺出租 3商铺出售
				addData: {
					title:'',
					desc:'',
					housing_type:'',
					thumb:'',
					region:'',
					address:'',
					floor:'',
					rent:'',
					built_up_area:'',
					free_rent_time:currentDate,
					mian_rent_time:currentDate,
					yafu:'',
					shui:'',
					dian:'',
					wuye:'',
					area:'',
					order_type:'',
					properties_for_sale:'',
					renovation:'',
					office_type:'',
					nature:'',
					built_up_real_area:'',
					division:'',
					register:'',
					property_fee:'',
					rent_time:'',
					payment:'',
					price:'',
					shop_type:'',
					shop_nature:'',
					close_street:'',
					kuan:'',
					gao:'',
					shen:'',
					business_status:'',
					business_industry:'',
					shop_price:'',
					yuqi_price:'',
					zhaunrang:'',
					shengyuzuqi:''
				},
				// startDate:Date.now(),
				// endDate:Date.now()
			}
		},
		created() {
			this.getRegin()
			this.floorList = Array.from({length:100}, (v,k) => k)
		},
		computed: {
				startDate() {
						return this.getDate('start');
				},
				endDate() {
						return this.getDate('end');
				}
		},
		methods: {
			async getRegin() {
				let res = await this.$api.getRegion()
				if(res) {
					this.regionList = res
				}
			},
			async addItem() {
				let res = await this.$api.addHouse(this.addData)
				if(res) {
					uni.redirectTo({
						url:'/pages/myNews/myNews'
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
			},
			bindPickerChange(e) {
					this.index = e.target.value
					this.addData.housing_type = this.transType[this.index].name
			},
			regionChange(e) {
				this.addData.region = this.regionList[e.target.value].id
			},
			getType(data) {
				let item = this.regionList.find(item=>item.id == data)
				if(item) {
					return item.name
				}else {
					return '请选择'
				}
			},
			floorChange(e) {
				this.addData.floor = this.floorList[e.target.value]
			},
			totalFloorChange(e) {
				this.totalFloor = this.floorList[e.target.value]
			},
			shopTypeChange(e) {
				this.addData.shop_type = this.businessHouseType[e.target.value].name
			},
			shopNatureChange(e) {
				this.addData.shop_nature = this.houseType[e.target.value].name
			},
			yeornoChange(e) {
				this.addData.close_street = this.yesornoList[e.target.value].key
			},
			industyChange(e) {
				this.addData.business_industry = this.industyList[e.target.value].name
			},
			bindDateChange1(e) {
				this.addData.free_rent_time = e.target.value
			},
			bindDateChange2(e) {
				this.addData.main_rent_time = e.target.value
			},
			houseTypeChange(e) {
				this.house_type = this.houseType[e.target.value].name
			},
			stateChange(e) {
				this.addData.business_status = this.stateList[e.target.value].name
			},
			changeCheck(data) {
				data.isCheck = !data.isCheck
			},
			selImage() {
				let _this = this
				uni.chooseImage({
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
								console.log(chooseImageRes,'file')
				        uni.uploadFile({
				            url: 'http://olvintage.com:8080/api/upload/', 
				            filePath: tempFilePaths[0],
				            name: 'file',
				            header:{
				            	// 'Content-Type': 'application/json',
				            	'Content-Type': 'multipart/form-data',
				            	'Authorization':'jwt '+ uni.getStorageSync('token')
				            },
				            success: (uploadFileRes) => {
				               let data = JSON.parse(uploadFileRes.data) 
											 console.log(uploadFileRes,'888')
											 // _this.addData.thumb.push(data.url)
											 _this.addData.thumb = data.url
				            }
				        });
				    }
				})
			},
			openAddres() {
				return
					this.cityPickerValueDefault = [0,0,1]
					this.$refs.simpleAddress.open();
			},
			openAddres2() {
					// 根据 label 获取
					var index = this.$refs.simpleAddress.queryIndex(['湖北省', '随州市', '曾都区'], 'label');
					console.log(index);
					this.cityPickerValueDefault = index.index;
					this.$refs.simpleAddress.open();
			},
			openAddres3() {
					// 根据value 获取
					var index = this.$refs.simpleAddress.queryIndex([13, 1302, 130203], 'value');
					console.log(index);
					this.cityPickerValueDefault = index.index;
					this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				this.addData.region = e.labelArr.join('/');
			},
			formateType(data) {
				return data?'是':'否'
			}
		},
		components: {
			simpleAddress
		}
	}
</script>

<style lang="scss">
.addNews {
	&.page {
		padding: 14upx 0;
		height: auto;
	}
	
}
</style>
