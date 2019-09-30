/**
 * 封装uni的request
 */
// const baseUrl = 'http://49.234.133.200:8001'
const baseUrl = ''

export function request(url, method = "GET", data,config={}) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: baseUrl+url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
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


