<template>
  <div id="mainmenu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
};
</script>

<style scoped>
#mainmenu {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* height: 100%; */
  width: 100%;
}
</style>
