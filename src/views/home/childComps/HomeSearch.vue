<template>
  <div class="home-search">
    <search>
      <div slot="center" class="home-search-center">
        <label for="">
          <input type="text" />
        </label>
      </div>
    </search>
  </div>
</template>

<script>
import Search from "components/common/search/Search";

export default {
  name: "HomeSearch",
  components: {
    Search,
  },
};
</script>

<style scoped>
.home-search {
  background-color: var(--color-tint);
}
.home-search-center {
  height: 100%;
}
/* 这部分的input用idv重构 */
.home-search-center input {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  /* box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1); */
  padding: 0 0 0 48px;
  font-size: var(--font-size);
  color: #c0c6cc;
  background-color: #f8f8f8;
}

.home-search-center label::before {
  font-family: "icomoon";
  content: "\e90f";
  position: fixed;
  top: 42px;
  left: 26px;
  height: 0px;
  background-color: pink;
}
.home-search-center label::after {
  content: "|";
  position: fixed;
  top: 42px;
  left: 46px;
  height: 0;
}
</style>
