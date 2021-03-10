<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <div slot="item-icon" class="icon1"></div>
      <div slot="item-icon-active" class="icon1"></div>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/message">
      <div slot="item-icon" class="icon2"></div>
      <div slot="item-icon-active" class="icon2"></div>
      <div slot="item-text">消息</div>
    </tab-bar-item>
    <tab-bar-item path="/recommend">
      <div slot="item-icon" class="icon3"></div>
      <div slot="item-icon-active" class="icon3"></div>
      <div slot="item-text">推荐</div>
    </tab-bar-item>
    <tab-bar-item path="/square">
      <div slot="item-icon" class="icon4"></div>
      <div slot="item-icon-active" class="icon4"></div>
      <div slot="item-text">广场</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="item-icon" class="icon5"></div>
      <div slot="item-icon-active" class="icon5"></div>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
.icon1::before {
  content: "";
}
.icon2::before {
  content: "";
}
.icon3::before {
  content: "";
}
.icon4::before {
  content: "";
}
.icon5::before {
  content: "";
}
</style>
