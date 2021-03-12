<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left" class="left">地点</div>
      <div slot="center">安家客</div>
      <div slot="right" class="right"></div>
    </nav-bar>
    <home-search class="home-search"></home-search>
    <main-menu class="main-menu">
      <!-- 请求数据（对象），渲染出来 -->
      <main-menu-item v-for="i in 10" class="main-menu-item">
        <div slot="icon"></div>
        <div slot="text">{{ i }}</div>
      </main-menu-item>
    </main-menu>
    <card-switch
      :titles="cardswitchitem"
      class="home-cart-switch"
    ></card-switch>
    123
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import MainMenu from "components/common/mainmenu/MainMenu";
import MainMenuItem from "components/common/mainmenu/MainMenuItem";
import Swiper from "components/common/swiper/Swiper";
import CardSwitch from "components/content/cardswitch/CardSwitch";

import HomeSearch from "./childComps/HomeSearch";

export default {
  name: "Home",
  data() {
    return {
      cardswitchitem: [
        "推荐",
        "新房",
        "二手房",
        "租房",
        "商业地产",
        "海外地产",
        "装修",
      ],
    };
  },
  components: {
    NavBar,
    MainMenu,
    MainMenuItem,
    CardSwitch,
    Swiper,
    HomeSearch,
  },
};
</script>
 
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  box-shadow: none;
}
.left {
  margin-left: 7px;
  text-align: center;
}
.left::after {
  font-family: "icomoon";
  content: "\e900";
  vertical-align: middle;
}
.right::after {
  font-family: "icomoon";
  content: "\e90f";
  vertical-align: middle;
  position: fixed;
  top: 0px;
  right: 17px;
  font-size: 21px;
}
.main-menu {
  margin: 10px 0;
}
.home-cart-switch {
  margin-bottom: 10px;
}
</style>
