import {
  request
} from './request'




export default {
  async login(data) {
    return await request('api/user/login/', 'post', data)
  },
	async homeRecord(data) {
	  return await request('api/home/', 'get', data)
	},
	async getRegion(data) {
	  return await request('api/region/', 'get', data)
	},
	async addHouse(data) {
	  return await request('api/housing/', 'post', data)
	},
	async getMyNews(data) {
	  return await request('api/housing/', 'get', data)
	},
	async upload(data) {
	  return await request('api/upload/', 'post', data)
	},
	async getCollect(data) {
	  return await request('api/collect/', 'get', data)
	},
	async getHouseById(data) {
	  return await request('api/housing/'+data, 'get')
	},
	async addCollect(data) {
	  return await request('api/collect/', 'post', data)
	},
	async delCollect(data) {
	  return await request('api/collect/'+data, 'delete')
	},
	async delHouse(data) {
	  return await request('api/housing/'+data.id, 'delete',data)
	},
	async addAppoint(data) {
	  return await request('api/reservation/', 'post',data)
	},
	async getAppointDetail(data) {
	  return await request('api/reservation/'+data, 'get')
	},
	async delAppoint(data) {
	  return await request('api/reservation/'+data, 'delete',data)
	},
	async updateAppoint(data) {
	  return await request('api/reservation/'+data.id+'/', 'put',data)
	},
	async getAppointList(data) {
	  return await request('api/reservation/', 'get',data)
	},
	async getBrand(data) {
	  return await request('api/brand/', 'get',data)
	},
	async search(data) {
	  return await request('api/search/', 'post',data)
	},
}
