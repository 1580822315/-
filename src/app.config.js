export default {
  pages: [
    'pages/user/user',
    'pages/index/index',
    'pages/find/find',
    'pages/shop/shop',
    
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color:'#000000',
    selectedColor:'#1296db',
    backgroundColor:"#ffffff",
    list:[
      {
        text:'首页',
        pagePath:'pages/index/index',
        iconPath:'assest/tabbar/home.png',
        selectedIconPath:'assest/tabbar/home-on.png'
      },
      {
        text:'发现',
        pagePath:'pages/find/find',
        iconPath:'assest/tabbar/find.png',
        selectedIconPath:'assest/tabbar/find-on.png'
      },
      {
        text:'店铺',
        pagePath:'pages/shop/shop',
        iconPath:'assest/tabbar/shop.png',
        selectedIconPath:'assest/tabbar/shop-on.png'
      },
      {
        text:'我的',
        pagePath:'pages/user/user',
        iconPath:'assest/tabbar/user.png',
        selectedIconPath:'assest/tabbar/user-on.png'
      }
    ]
  },
  // 用于获取地理授权
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    }
  }

}
