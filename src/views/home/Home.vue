<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left" class="left">地点</div>
      <div slot="center">安家客</div>
      <div slot="right" class="right"></div>
    </nav-bar>
    <home-search class="home-search"></home-search>
    <card-switch
      :titles="cardswitchitem"
      class="home-cart-switch"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></card-switch>
    <Scroll
      class="content1"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <main-menu class="main-menu">
        <!-- 请求数据（对象），渲染出来 -->
        <main-menu-item v-for="item in menuInfo" class="main-menu-item">
          <div slot="icon" class="icon" :style="item.imgsrc"></div>
          <div slot="text">{{ item.name }}</div>
        </main-menu-item>
      </main-menu>
      <card-switch
        :titles="cardswitchitem"
        class="home-cart-switch"
        @tabClick="tabClick"
        ref="tabControl2"
      ></card-switch>
      <NewHousesList
        v-if="newShow"
        :houses="showHouses"
        class="house_list"
      ></NewHousesList>
      <SecondHousesList
        v-if="secondShow"
        :houses="showHouses"
        class="house_list"
      ></SecondHousesList>
      <RentalHousesList
        v-if="rentalShow"
        :houses="showHouses"
        class="house_list"
      ></RentalHousesList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import MainMenu from "components/common/mainmenu/MainMenu";
import MainMenuItem from "components/common/mainmenu/MainMenuItem";
import Swiper from "components/common/swiper/Swiper";
import CardSwitch from "components/content/cardswitch/CardSwitch";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSearch from "./childComps/HomeSearch";
import NewHousesList from "./childComps/NewHousesList";
import SecondHousesList from "./childComps/SecondHousesList";
import RentalHousesList from "./childComps/RentalHousesList";

import { getHomeMultiData, getHomeHouses } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    MainMenu,
    MainMenuItem,
    Swiper,
    CardSwitch,
    Scroll,
    BackTop,
    NewHousesList,
    SecondHousesList,
    RentalHousesList,
    HomeSearch,
  },
  data() {
    return {
      menuInfo: {},
      cardswitchitem: [],
      houses: {
        recommend: { page: 0, list: [] },
        new: { page: 0, list: [] },
        secondhand: { page: 0, list: [] },
        rental: { page: 0, list: [] },
        commercial: { page: 0, list: [] },
        overseas: { page: 0, list: [] },
        renovation: { page: 0, list: [] },
      },
      currentType: "new",
      newShow: true,
      secondShow: false,
      rentalShow: false,
      isShowBackTop: false,
      // tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  computed: {
    showHouses() {
      return this.houses[this.currentType].list;
    },
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultiData();
    // 2. 请求房子的数据
    this.getHomeHouses("new");
    this.getHomeHouses("secondhand");
    this.getHomeHouses("rental");
  },
  mounted() {
    // 3. 监听item中图片加载完成

    // 防抖动包装
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("homeItemImageLoad", () => {
      // this.$refs.scroll.refresh();
      refresh();
    });
    console.log(this.$refs.tabControl2.$el.offsetTop);
  },
  methods: {
    // 事件监听相关
    tabClick(index) {
      switch (index) {
        case 1:
          this.currentType = "new";
          this.newShow = true;
          this.secondShow = false;
          this.rentalShow = false;
          break;
        case 2:
          this.currentType = "secondhand";
          this.newShow = false;
          this.secondShow = true;
          this.rentalShow = false;
          break;
        case 3:
          this.currentType = "rental";
          this.newShow = false;
          this.secondShow = false;
          this.rentalShow = true;
          break;
      }
      // 保证两个tabControl一致
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // 1. 判断 BackTop 是否显示
      this.isShowBackTop = position.y <= -1000;
      console.log(position.y);
      // 2. 判断 tabControl 是否吸顶(position: fixed)
      // 有Bug 进入首页没有隐藏掉
      // 原因： 是<  不是<=
      this.isTabFixed =
        position.y < -(this.$refs.tabControl2.$el.offsetTop + 10);
    },
    loadMore() {
      this.getHomeHouses(this.currentType);
      this.$refs.scroll.scroll.refresh();
      console.log("加载更多图片完成");
    },
    // getControlOffsetTop() {
    //   console.log(this.$refs.tabControl.$el.offsetTop);
    // },

    // 网络相关
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.menuInfo = res.menu;
        this.cardswitchitem = res.type;
      });
    },
    getHomeHouses(type) {
      const page = this.houses[type].page + 1;
      getHomeHouses(type, page).then((res) => {
        if (res) {
          console.log(res);
          this.houses[type].list.push(...res.houseitem);
          this.houses[type].page += 1;
          // 完成下拉加载更多
          this.$refs.scroll.finishPullUp();
        }
      });
    },
  },
};
</script>
 
<style scoped>
#home {
  /* 视口高度 */
  height: 100vh;
  /* height: 100%; */
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  box-shadow: none;
}
.left {
  margin-left: 7px;
  text-align: center;
  font-size: 12px;
}
.left::after {
  font-family: "icomoon";
  content: "\e900";
  vertical-align: middle;
}
.right::after {
  font-family: "icomoon";
  content: "\e90f";
  position: relative;
  text-align: center;
  top: 0px;
  right: -22px;
  font-size: 21px;
}
.home-search {
  position: sticky;
  top: 0;
  z-index: 3;
}
.main-menu {
  margin: 10px 0;
}
.icon {
  background: url("~assets/img/common/menu.png") no-repeat -6px -10px;
  zoom: 0.32;
  height: 100%;
  width: 100%;
}
.home-cart-switch {
  margin-bottom: 10px;
}
.content1 {
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top: 84px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
