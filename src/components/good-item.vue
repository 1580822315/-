<template>
    <view class="goodItem">
        <view>我是一行文本</view>
    </view>
</template>

<script>
export default {
    props:{
        good:{
            type:Object,
            required: true
        }
    },
    // 组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData )
    created(){
        console.log("组件生命周期函数-在组件实例刚刚被创建时执行");
    }
}
</script>

<style lang="scss">
    .goodItem{
        width: 700rpx;
        height: 250rpx;
        background-color: #ccc;
        margin: 10rpx auto;
        border-radius: 20rpx;
    }
</style>