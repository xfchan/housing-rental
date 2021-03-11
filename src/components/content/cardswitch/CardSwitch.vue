<template>
  <div class="cart-switch">
    <div v-for="item in titles" class="cart-switch-item">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSwitch",
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
  width: 200%;
}
.cart-switch-item {
  float: left;
  width: 50px;
}
</style>
