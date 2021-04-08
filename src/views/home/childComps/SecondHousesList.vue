<template>
  <div id="houses-list">
    <HousesListItem v-for="item in houses" class="houses-list-item">
      <img
        :src="item.image"
        alt=""
        slot="img"
        class="image"
        @load="imageLoad"
      />
      <!-- <em slot="salestate">{{ item.info.salestate }}</em> -->
      <span slot="title" class="title">{{ item.title }}</span>
      <label for="" slot="local" class="local">{{ item.local1[0] }}</label>
      <div slot="new-area" class="area">
        <span class="shu_xian"></span>
        <div class="area1">{{ item.local2 }}</div>
      </div>
      <label class="new-price" slot="new-price">
        <strong>{{ item.price }}</strong>
        万
        <span slot="gui_ge" class="gui_ge">{{ item.guige.slice(0, 4) }}</span>
        <span class="shu_xian"></span>
        <span class="second-area" slot="second-area">{{
          item.area + "m²"
        }}</span>
      </label>
      <div class="group-info">
        <span slot="name">{{ item.name }}</span>
        <span slot="score">{{ item.score }}</span>
        <span slot="group">{{ item.group }}</span>
      </div>

      <!-- <em slot="tag" v-for="tag in item.tag" class="tags">{{ tag }}</em> -->
    </HousesListItem>
  </div>
</template>

<script>
import HousesListItem from "components/content/houses/HousesListItem";
export default {
  name: "SecondHousesList",
  components: {
    HousesListItem,
  },
  props: {
    houses: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("homeItemImageLoad");
    },
  },
};
</script>

<style scoped>
.houses-list-item {
  /* background-color: gray; */
  margin: 0 20px;
  padding: 20px 0;
  /* border: 1px solid red; */
}
.image {
  width: 100%;
  height: 100%;
}

em {
  font-size: 12px;
  text-align: center;
  padding: 2px 2px;
  height: 16px;
  line-height: 12px;
  margin-right: 7px;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  background: -webkit-linear-gradient(0deg, #6786d3, #3e59bc);
  font-style: normal;
}
.title {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  flex: 1;
  vertical-align: middle;
  padding-top: 1px;
  color: black;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.local {
  font-size: 8px;
  color: black;
  height: 12px;
  margin-top: 8px;
  line-height: 12px;
}
.area {
  display: inline-block;
  font-size: 8px;
  color: black;
  height: 12px;
  margin-top: 8px;
  line-height: 12px;
}
.shu_xian {
  display: inline-block;
  margin: 0 5px;
  width: 1px;
  height: 8px;
  background-color: #e6e6e6;
  vertical-align: middle;
}
.area1 {
  display: inline-block;
}
.new-price {
  color: #fd4d39;
  font-size: 12px;
}
.new-price strong {
  font-size: 20px;
  font-weight: 900;
  height: 18px;
  line-height: 18px;
}
.gui_ge,
.second-area {
  display: inline-block;
  font-size: 12px;
  line-height: 12px;
  color: #0b0f12;
  vertical-align: middle;
  font-family: PingFang SC;
}
.group-info {
  margin-top: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 199px;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
}
.group-info span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #979b9e;
  line-height: 1.1;
  margin-left: 7px;
}
.group-info span:first-child {
  margin: 0;
}
</style>
