<template>
  <view class="page-find">
      <button open-type="contact">点击联系客服</button>
      <button open-type="share">点击分享</button>
  </view>
</template>
<script>
export default {
    // 当用户点击胶囊按钮触发或点击button[open-type="share"]时触发
    onShareAppMessage(e){
        if(e.from==="button"){
            return{
                title:"朋友都在赚零花钱,就差你了",
                path:"/pages/index/index",
            }
        }else{
            return{
                title:"我在这家店消费了,你也来吧",
                path:"/pages/shop/shop",
            }
        }
    }
}
</script>
<style lang="scss">

</style>