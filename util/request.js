/**
 * 封装uni的request
 */
// const baseUrl = 'http://49.234.133.200:8001'
const baseUrl = 'http://olvintage.com:8080/'
const shopId = '9986737883062651401706261418474'

export function request(url, method = "GET", data,config={}) {
  return new Promise(function (resolve, reject) {
		console.log(baseUrl+url,'url')
		let token = uni.getStorageSync('token')
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


