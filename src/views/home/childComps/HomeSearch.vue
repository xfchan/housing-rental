<template>
  <div class="home-search">
    <search>
      <div slot="center" class="home-search-center">
        <label for="">
          <input type="text" value="nihao" />
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
  /* margin-top: 100px; */
}
.home-search-center {
  height: 100%;
}
.home-search-center label {
  display: inline-block;
  width: 100%;
  height: 100%;
}
/* 这部分的input用idv重构 */
.home-search-center input {
  width: 100%;
  height: 75%;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: var(--font-size);
  color: #c0c6cc;
  padding-left: 47px;
  background-color: #f8f8f8;
  /* background-color: red; */
}
.home-search-center label::before {
  position: absolute;
  font-family: "icomoon";
  content: "\e90f";
  left: 28px;
  height: 0;
  top: 1px;
}
.home-search-center label::after {
  position: absolute;
  font-family: "icomoon";
  content: "";
  width: 1px;
  left: 53px;
  height: 13px;
  top: 14px;
  border: transparent #666666 transparent transparent;
  border-right: 1px solid;
}
</style>
