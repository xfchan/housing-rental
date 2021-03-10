<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "green",
    },
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/cart) = true
      // /home -> item1(/profile) = true
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}

div[class^="icon"]::before {
  font-family: "icomoon";
  display: inline-block;
  padding: 5px 0 3px;
  font-size: 20px;
  font-weight: 400;
}
</style>
