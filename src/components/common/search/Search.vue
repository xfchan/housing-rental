<template>
  <div id="search">
    <div class="search-center"><slot name="center"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
#search {
  display: flex;
  position: relative;
  height: 40px;
  line-height: 40px;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  vertical-align: middle;
  border: none;
}
.search-center {
  flex: 1;
  margin: 0 15px;
}
</style>
