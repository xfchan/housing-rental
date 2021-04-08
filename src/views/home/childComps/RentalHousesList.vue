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
      <span slot="title" class="title">{{ item.title }}</span>
      <span>
        <span slot="gui_ge" class="gui_ge">{{ item.gui_ge.slice(0, 4) }}</span>
        &nbsp;&nbsp;
        <span class="rental-area" slot="rental-area">{{
          item.area + "m²"
        }}</span>
      </span>
      <span>
        <div class="local">
          <span slot="local1" class="local1">{{ item.local1 }}</span
          >-
          <span slot="local2" class="local2">{{ item.local2 }}</span>
          &nbsp;&nbsp;
          <span slot="xiaoqu" class="xiaoqu">{{ item.xiao_qu }}</span>
        </div>
        <b slot="rental-price" class="rental-price">{{
          item.price + "元/月"
        }}</b>
      </span>
      <div class="rental-tags">
        <em slot="tag" class="tag1">{{ item.tag1 }}</em>
        <em slot="tag" class="tag2">{{ item.tag3 }}</em>
      </div>
    </HousesListItem>
  </div>
</template>

<script>
import HousesListItem from "components/content/houses/HousesListItem";
export default {
  name: "RentalHousesList",
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
  display: -webkit-box;
  -webkit-box-flex: 1;
  padding: 10px;
  border-bottom: 1px solid #e7e7e7;
}
.image {
  width: 100%;
  height: 100%;
}

.title {
  display: -webkit-box;
  font-size: 16px;
  margin-top: -1px;
  height: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #333;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
.local {
  margin-top: 5px;
  font-size: 12px;
  line-height: 20px;
  color: #666;
  display: inline-block;
  -webkit-box-flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 69%;
}
.area {
  display: inline-block;
  font-size: 8px;
  color: black;
}

.rental-price {
  color: #fd4d39;
}
.rental-price strong {
  font-size: 20px;
  font-weight: 900;
  height: 18px;
  line-height: 18px;
}
.gui_ge,
.rental-area {
  display: inline-block;
  font-size: 15px;
  line-height: 15px;
  color: #0b0f12;
  vertical-align: middle;
  font-family: PingFang SC;
}
.rental-tags em {
  font-style: normal;
}
.tag1,
.tag2 {
  box-sizing: border-box;
  float: left;
  padding: 2px 8px;
  line-height: 16px;
  text-align: center;
  border-radius: 2px;
  margin-right: 9px;
  font-size: 10px;
}
.tag1 {
  background: #edfbee;
  color: #5ec86f;
}
.tag2 {
  background: #fff3e6;
  color: #ffa626;
}
</style>
