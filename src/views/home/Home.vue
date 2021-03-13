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
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
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
        "撒大啊",
        "大萨达",
        "说的啊大",
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
.home-cart-switch {
  margin-bottom: 10px;
  position: sticky;
  top: 40px;
}
</style>
