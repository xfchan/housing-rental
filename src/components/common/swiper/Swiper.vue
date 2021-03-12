<template>
  <div class="swiper">
    <div class="swiper-contain contain">
      <div class="swiper-wrapper">
        <!-- 插槽里面需要加类：swiper-slide -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "Swiper",
  data() {
    return {
      activeClass: ".swiper-contain", //滑动模块名称
    };
  },
  mounted() {
    this.swiper = new Swiper(this.activeClass, {
      freeMode: true,
      slidesPerView: "auto",
      freeModeSticky: true,
      roundLengths: true, //防止文字模糊
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      initialSlide: 0, // 设定初始化时slide的索引
      freeModeMomentumBounceRatio: 3, //反弹强度
      // width: 80,
      // width: 100,
      //分页器
      // pagination: {
      //   el: ".swiper-pagination",
      // },
      // //左右前进后退按钮
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });
  },
};
</script>

<style scoped>
.swiper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.contain {
  width: 100%;
}
.swiper-contain {
  overflow: hidden;
}
.swiper-slide {
  padding: 10px 15px;
  width: auto;
  height: auto;
  box-sizing: border-box;
  background-color: pink;
  border: 1px solid black;
}
</style>
