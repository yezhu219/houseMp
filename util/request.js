/**
 * 封装uni的request
 */
// const baseUrl = 'http://49.234.133.200:8001'
const baseUrl = 'https://olvintage.com/'
const shopId = '9986737883062651401706261418474'

export function request(url, method = "GET", data,config={}) {
  return new Promise(function (resolve, reject) {
		let token = uni.getStorageSync('token')
		console.log(url,'url')
    uni.request({
      url: baseUrl+url,
      data: data,
      method: method,
      header: {
				'Authorization':`jwt ${token}`,
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Cookie': 'JSESSIONID='+ wx.getStorageSync('sessionId')
      },
      success: function (res) {
        uni.hideLoading()
				if(res.statusCode==401) {
					uni.removeStorageSync('token')
					uni.navigateTo({
						url:'/pages/login/login'
					})
					return 
				}
        resolve(res.data)
      },
      fail: function (err) {
       let msg=JSON.stringify(err)
        uni.showModal({
          title: '错误',
          // content: '网络异常',
          content:msg,
          showCancel: false
        });
        reject(err);
      }
    })
  });
}


