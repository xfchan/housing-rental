<template>
  <div class="cart-switch">
    <swiper>
      <div v-for="item in titles" class="swiper-slide">{{ item }}</div>
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
};
</script>

<style scoped>
.cart-switch {
  width: 100%;
}
</style>
