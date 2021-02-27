<template>
  <view class="pages-index">
    <!-- 轮播图 -->
    <swiper class="swiper"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay" 
      :interval="interval" 
      :duration="duration"
    >
      <swiper-item v-for="item in images" :key="item.id">
        <image :src="item.src"></image>
      </swiper-item>
    </swiper>
    <!-- 搜索框 -->
    <view class="search">
      <input type="text" placeholder="戒指" v-model="text" @Confirm="confirm"/>
    </view>
    <!-- 商品列表 -->
    <GoodItem
      v-for="item in list"
      :key="item.id"
      :good="item"
      v-text="item.name"
    />
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import GoodItem from "../../components/good-item.vue"

export default {
  components:{
    GoodItem,
  },
  data () {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500,
      images: [
        {id: 1, src: '//m.360buyimg.com/mobilecms/s750x750_jfs/t19759/99/2229398405/155388/3987164a/5aeb3099Nd076e9c0.jpg!q80.dpg.webp'},
        {id: 2, src: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/143028/40/1058/74830/5eec2a31E9b659b26/e1ffe3e974b0b3ec.jpg!q80.dpg.webp'},
        {id: 3, src: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/86795/15/17110/100687/5e843ba6E4bd67ccc/49796334aa7f421f.jpg!q80.dpg.webp'}
      ],
      text:"",
      list:[
        {id:1,name:"我是一件商品1"},
        {id:2,name:"我是一件商品2"},
        {id:3,name:"我是一件商品3"},
        {id:4,name:"我是一件商品4"},
        {id:5,name:"我是一件商品5"},
        {id:6,name:"我是一件商品6"},
      ]
    }
  },
  // 页面中常用的生命周期
  // 监听页面加载-当页面刚刚加载时触发,一个页面只会调用一次,首先被触发
  onLoad(){
    console.log("监听页面加载-当页面刚刚加载时触发,一个页面只会调用一次---1");
  },
  // 页面从不显示到显示时触发  /切入前台时触发,每次进入此页面都会调用
  onShow(){
    console.log("页面从不显示到显示时触发  /切入前台时触发----2");
  },
  // 页面初次渲染完成时触发.一个页面只会调用一次,代表页面已经准备妥当,可以和视图层进行交互
  onReady(){
    console.log("页面初次渲染完成时触发.一个页面只会调用一次,代表页面已经准备妥当,可以和视图层进行交互----3");
  },
  // 页面隐藏/切入后台时触发  也就是从看得见到看不会触发
  onHide(){
    console.log("页面隐藏/切入后台时触发");
  },
  // 下拉刷新,页面配置中开启 enablePullDownRefresh
  onPullDownRefresh(){
    console.log("你触发了下拉刷新的操作")
    // 模拟调接口,别忘了将page设置成第一页
    setTimeout(()=>{
      // 当处理完数据刷新后，Taro.stopPullDownRefresh 可以停止当前页面的下拉刷新
      Taro.stopPullDownRefresh()
    },1000)
  },
  // 上拉加载，页面配置中设置触发距离 onReachBottomDistance
  onReachBottom(){
    console.log("你触发了触底操作");
  },
  // 监听用户滑动页面事件
  onPageScroll(e){
    console.log("页面滑动距离",e.scrollTop);
  },
  methods:{
    confirm(){
      console.log("确认搜索",this.text);
    }
  }
}
</script>

<style lang="scss">
.pages-index{
  .swiper{
    width: 750rpx;
    height: 600rpx;
      swiper-item{
        display: block;
        width: 100%;
        height: 100%;
          image{
            display: block;
            width: 100%;
            height: 100%;
          }
      }
  }
  .search{
    width: 690rpx;
    height: 60rpx;
    margin: 14px auto;
    overflow: hidden;
    &>input{
      background-color: #EFEFEF;
      width: 100%;
      height: 100%;
      line-height: 60rpx;
      border-radius: 20rpx;
      padding-left: 30rpx;
      box-sizing: border-box;
    }
  }
}
</style>>
