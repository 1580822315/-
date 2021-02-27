import Vue from 'vue'
import './app.scss'
import Taro from '@tarojs/taro'

async function login(){
  let {code} = await Taro.login()
  let {token} = await Taro.request({url,data})
  Taro.setStorage({key:"token",data:token})
}

const App = new Vue({
  // app中的生命周期
  onLaunch(){
    console.log("app启动了,初始化的时候调用");
    // 1-在这里做微信登录业务逻辑
    // Taro.login().then(res=>{
    //   console.log("code",res.code);
    //   // 发送code给后端
    //   Taro.request({
    //     url: 'http://test.com/onLogin',
    //     data: {
    //       code: res.code
    //     }
    //   }).then(res=>{
    //     Taro.setStorage({
    //       key:"token",
    //       data:"res.code"
    //     })
    //   })
    // })
    // 2-获取定位授权
    Taro.getSetting().then(res=>{
      if (!res.authSetting['scope.userLocation']) {
        Taro.authorize({
          scope: 'scope.userLocation',
        }).then(res=>{
          console.log("用户同意获取地理位置",res);
        })
      }
    })
  },
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
