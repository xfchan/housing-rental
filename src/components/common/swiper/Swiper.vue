<template>
  <div class="swiper">
    <div class="swiper-contain contain">
      <div class="swiper-wrapper">
        <!-- 插槽里面需要加类：swiper-slide -->
        <slot></slot>
      </div>
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
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
      // freeModeSticky: true, //使得freeMode也能自动贴合。
      roundLengths: true, //防止文字模糊
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      initialSlide: 0, // 设定初始化时slide的索引
      freeModeMomentumBounceRatio: 2, //反弹强度
      slideToClickedSlide: true, // 点击slide会过渡到这个slide
      centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左
      centeredSlidesBounds: true, //使得第一个和最后一个Slide 始终贴合边缘
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
      on: {
        tap: function (swiper, event) {
          // 得到当前点击 swiper-slide 的索引
          // console.log(this.clickedIndex);
          // console.log(this);
        },
      },
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      //   dragSize: 30,
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
  display: flex;
}
.swiper-wrapper {
  background-color: #fff;
}
.swiper-slide {
  padding: 10px 15px;
  /* width: auto;
  height: auto; */
  width: 33.333333333%;
  text-align: center;

  box-sizing: border-box;
  font-size: 14px;
}
/* .swiper-scrollbar {
  background-color: black;
  height: 3px;
  width: 20px;
} */
</style>
