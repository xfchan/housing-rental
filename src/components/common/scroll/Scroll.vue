<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 1. 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // scrollY: true,
      // 控制非button元素的点击
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      // scrollbar: true,
      pullDownRefresh: true,
      // scrollbar: true,
      // pullDownRefresh: true,
    });
    // this.scroll.on("touchEnd", (e) => {
    //   console.log(e, this.scroll);
    // });
    // 2. 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
      // console.log(this.scroll);
    }
    // 3. 监听scroll滚顶到底部,上拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        console.log("到底部");
        this.$emit("pullingUp");
      });
    }
    // console.log(this.scroll);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },

    refresh() {
      // 可能图片加载过快，Scroll还没挂载，里面的refresh()函数无法执行
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style scoped>
</style>
