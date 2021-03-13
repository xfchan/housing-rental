<template>
  <div class="cart-switch">
    <swiper>
      <div
        v-for="(item, index) in titles"
        class="swiper-slide"
        @click="slideClick(index)"
        :class="{ active: index === currentIndex }"
      >
        {{ item }}
      </div>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "CardSwitch",
  components: { Swiper },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // 初始当前的点击
      currentIndex: 1,
    };
  },
  methods: {
    slideClick(index) {
      console.log(index);
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.cart-switch {
  width: 100%;
}
.active {
  color: var(--color-tint);
  /* border-bottom: 1px solid var(--color-tint); */
  font-size: 17px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.active::after {
  content: "";
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: var(--color-tint);
  border-radius: 20%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
