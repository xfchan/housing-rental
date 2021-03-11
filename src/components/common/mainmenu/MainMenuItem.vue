<template>
  <div class="main-menu-item">
    <a href="">
      <div class="icon"><slot name="icon"></slot></div>
      <div class="text"><slot name="text"></slot></div>
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "MainMenuItem",
};
</script>

<style scoped>
.main-menu-item {
  position: relative;
  width: 20%;
  height: 70px;
  margin-top: 10px;
  background-color: var(--color-tint);
  border: 1px solid black;
}
.icon {
  position: absolute;
  border-radius: 5px;
  background-color: #fff;
  font-family: "icomoon";
  content: "\e90f";
  color: blue;
  height: 65%;
  width: 65%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
