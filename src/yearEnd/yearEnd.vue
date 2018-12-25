<!--
  年终活动页面
  Author:sunanguang
  Date:2018-12-20
  Version:1.0.0
-->
<template>
<div id="mainContainer">
  <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">
    <!-- slides -->
    <swiper-slide class="slide-item" v-if="isShowFirstPage">
      <first-page></first-page>
    </swiper-slide>
    <swiper-slide class="slide-item" v-if="isShowSecondPage">I'm Slide 2</swiper-slide>
    <swiper-slide class="slide-item" v-if="isShowThreePage">I'm Slide 3</swiper-slide>
    <swiper-slide class="slide-item" v-if="isShowFourPage">I'm Slide 4</swiper-slide>
    <swiper-slide class="slide-item">I'm Slide 5</swiper-slide>
    <swiper-slide class="slide-item">I'm Slide 6</swiper-slide>
    <swiper-slide class="slide-item">I'm Slide 7</swiper-slide>
  </swiper>
</div>
  
</template>

<script>
import {mapState} from "vuex";
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import firstPage from "./pages/firstPage.vue";
require("swiper/dist/css/swiper.css");
export default {
  name: 'yearEnd',
  data() {
    return {
      // swiper:null,//swiper对象
      swiperOption:{//swiper配置
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        direction : 'horizontal',
        effect:"slide",//位移切换
        grabCursor : true,
        setWrapperSize :false,
        mousewheelControl : true,
        observer:true,
        observeParents:true,
        initialSlide:0,//默认显示的
        width: window.innerWidth,
        height: window.innerHeight,
      },
      isShowFirstPage:true,//是否显示第一页
      isShowSecondPage:true,//是否显示第二页
      isShowThreePage:true,//是否显示第三页
      isShowFourPage:true,//是否显示第四页
    }
  },
  components: {
    swiper,
    swiperSlide,
    firstPage,
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    ...mapState(['serverURL','avatarURLPre']),
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created(){
    // this.initSwiper();
  },
  methods:{
    //初始化Swiper
    initSwiper(){
      this.swiper = new Swiper('.swiper-container',{
        direction:'vertical',
      })
    }
  },
}
</script>

<style lang='less' scoped>
  @import url(~@/assets/less/yearEnd.less);
</style>
