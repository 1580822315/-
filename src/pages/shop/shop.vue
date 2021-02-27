<template>
  <view class="shop">
    <button v-if="isShowLocation" @tap="openAddre">请求地理位置授权</button>
    <map 
      id="map"
      :longitude="latLng.lng" 
      :latitude="latLng.lat" 
      scale="14" 
      :markers="markers" 
      @markertap="markertap" 
      :polyline="polyline" 
      show-location 
      style="width: 100%; height: 300px;" />
      <button @tap="goTo">导航去店铺</button>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
export default {
  data(){
    return{
      // 默认没有开启地理位置
      isShowLocation:false,
      // 地图数据
      // 小图标地址
      latLng:{},
      markers: [{
        iconPath: "https://avatars2.githubusercontent.com/u/1782542?s=460&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4",
        id: 0,
        latitude: 22.55329,
        longitude: 113.88308,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color:"#FF0000DD",
        width: 2,
        dottedLine: true
      }]
    }
  },
  onShow(){
    // 在已进入到店铺页面的时候，就判断是否接收地理位置了
    Taro.getSetting().then(res=>{
      // 如果显示允许获取地理位置就不显示按钮，如果拒绝获取地理位置就显示按钮
      this.isShowLocation = !res.authSetting['scope.userLocation']
      // 如果允许获取地理位置就获取地理位置的经纬度
      if(!this.isShowLocation){
        Taro.getLocation().then(res=>{
          console.log(res);
          // 将自己的位置赋值给默认地址
          this.latLng = {
            lat : res.latitude,
            lng : res.longitude
          }
        })
      }
    })
  },
  methods:{
    // 点击开启地理位置
    openAddre(){
      Taro.openSetting({
        success: function (res) {
          console.log(res.authSetting)
        }
      })
    },
    markertap(e) {
      console.log("markertap:", e.detail.markerId)
    },
    // 点击打开地图内置地图
    goTo(){
      Taro.openLocation({
        latitude:this.latLng.lat,
        longitude:this.latLng.lng,
        scale: 18,
        address:"广东省深圳市宝安区戒指总店",
        name:"戒指首饰"
      })
    }
  }
}
</script>

<style lang="scss">

</style>