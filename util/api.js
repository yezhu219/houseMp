import {
  request
} from './request'




export default {
  async login(data) {
    return await request('/user/Login', 'post', data)
  },

}
