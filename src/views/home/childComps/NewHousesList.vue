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
      <em slot="salestate">{{ item.info.salestate }}</em>
      <span slot="title" class="title">{{ item.title }}</span>
      <label for="" slot="local" class="local">{{ item.local }}</label>
      <div slot="new-area" class="new-area">
        <span></span>
        <div class="area1">{{ item.area }}</div>
      </div>
      <label class="new-price" slot="new-price">
        <strong :class="{ nosale: item.price === '售价待定' }">{{
          item.price
        }}</strong>
        &nbsp;
        <span v-if="item.price !== '售价待定'">元/㎡起</span>
      </label>
      <em slot="tag" v-for="tag in item.tag" class="tags">{{ tag }}</em>
    </HousesListItem>
  </div>
</template>

<script>
import HousesListItem from "components/content/houses/HousesListItem";
export default {
  name: "NewHousesList",
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
  font-size: 18px;
  line-height: 19px;
  flex: 1;
  vertical-align: middle;
  padding-top: 1px;
  color: black;
}
.local {
  margin-right: 6px;
  font-size: 8px;
  color: black;
  height: 12px;
  margin-top: 8px;
  line-height: 12px;
}
.new-area {
  display: inline-block;
  font-size: 8px;
  color: black;
  height: 12px;
  margin-top: 8px;
  line-height: 12px;
}
.new-area span {
  height: 8px;
  width: 1px;
  margin-right: 6px;
  display: inline-block;
  border-left: 1px solid #e6e6e6;
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
.new-price .nosale {
  font-size: 12px;
}
.tags {
  display: inline-block;
  color: #fff;
  padding: 3px 4px;
  text-align: center;
  height: 18px;
  line-height: 12px;
  margin-right: 6px;
  margin-bottom: 1px;
  background-color: #fff;
}
</style>
