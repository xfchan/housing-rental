<template>
  <div id="houses-list-item">
    <div class="img"><slot name="img"></slot></div>
    <div class="content">
      <div class="first">
        <slot name="salestate"></slot>
        <slot name="title"></slot>
      </div>
      <div class="local_area">
        <slot name="local"></slot>
        <slot name="new-area"></slot>
        <slot name="local1"></slot>
        <slot name="local2"></slot>
        <slot name="xiaoqu"></slot>
      </div>
      <div class="new-price">
        <slot name="new-price"></slot>
        <slot name="gui_ge"></slot>
      </div>
      <div>
        <slot name="second-area"></slot>
        <slot name="rental-area"></slot>
        <slot></slot>
      </div>
      <span><slot name="rental-price"></slot></span>

      <div class="tag">
        <slot name="tag"></slot>
      </div>
      <div class="group-info">
        <slot name="name"></slot>
        <slot name="score"></slot>
        <slot name="group"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HousesListItem",
};
</script>

<style scoped>
#houses-list-item {
  /* position: relative; */
  overflow: hidden;
  line-height: normal;
  text-decoration: none;
  border-bottom: 1px solid #e6e6e6;
}
/* .first {
  background-color: red;
} */

.img {
  display: inline-block;
  width: 30%;
  height: 90px;
  background-color: green;
  vertical-align: top;
}
.content {
  display: inline-block;
  margin-left: 12px;
  /* background-color: skyblue; */
  height: 90px;
  width: 66%;
}
.new-price {
  margin-top: 9px;
}
</style>
