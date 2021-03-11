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
  text-align: center;
  vertical-align: middle;
  border: none;
}
.search-center {
  flex: 1;
  padding: 5px 0;
  margin: 0 15px;
}
</style>
