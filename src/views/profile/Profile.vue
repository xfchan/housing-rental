<template>
  <div id="profile">
    <div class="lg-header">
      <a id="lg-back-btn" href="javascript:;" class="lg-back">返回</a>
    </div>
    <div class="mh-header">
      <a class="mh-photo-wrap soj" href="">
        <img
          class="mh-photo"
          src="~assets/img/register/photo_default.png"
          alt=""
        />
      </a>
      <br />
      <a id="mh-username" href="" class="mh-lg">DLCHZY8</a>
    </div>
    <ul class="mh-list">
      <li class="border-1px">
        <a
          id="mh-list-dp"
          class="g-next"
          href="//m.anjuke.com/xinfang/ugcmylist/"
          >我的点评</a
        >
      </li>
      <li class="border-1px">
        <a
          id="mh-list-fy"
          class="g-next"
          href="//m.anjuke.com/yezhu/manage/list"
          >我的房源</a
        >
      </li>
      <li class="border-1px">
        <a
          id="mh-card"
          class="g-next"
          href="http://m.anjuke.com/xinfang/diamondlist/"
          >我的卡券</a
        >
      </li>
      <li class="border-1px">
        <a
          id="mh-card"
          class="g-next"
          href="http://m.anjuke.com/xinfang/diamond/order/"
          >我的订单</a
        >
      </li>
      <li class="border-1px">
        <a
          id="mh-card"
          class="g-next"
          href="//m.anjuke.com/xinfang/tuangou/mydiscount/"
          ><i class="bu-icon bu-icon-bmoney"></i>我的优惠</a
        >
      </li>
      <li class="border-1px">
        <a
          id="mh-card"
          class="g-next"
          href="//m.anjuke.com/xinfang/tuangou/mysignup/"
          ><i class="bu-icon bu-icon-signup"></i>我的报名</a
        >
      </li>

      <li class="border-1px">
        <a
          id="mh-list-tw"
          class="g-next"
          href="//m.anjuke.com/sh/answer/present"
          >我要提问<span></span
        ></a>
      </li>
    </ul>
    <div>
      <a id="mh-lgout" href="//m.anjuke.com/member/logout/" class=""
        >退出当前账号</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
div {
  -webkit-tap-highlight-color: transparent;
  display: block;
  font-family: "arial";
  -webkit-text-size-adjust: none;
  font-size: 12px;
  min-width: 320px;
}
img {
  display: block;
}
.lg-header {
  height: 46px;
  line-height: 46px;
  background: #62ab00;
  color: #fff;
  position: relative;
}
.lg-header:before {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0 auto 10px;
  content: "";
  border: #fff solid;
  border-width: 2px 0 0 2px;
  width: 13px;
  height: 13px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
a:link,
a:visited {
  text-decoration: none;
}
.lg-back {
  color: #fff;
  line-height: 46px;
  font-size: 0.8rem;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0 auto 20px;
}
.mh-header {
  height: 118px;
  background: #62ab00;
  color: #fff;
  position: relative;
  box-sizing: border-box;
  text-align: center;
}
.mh-photo-wrap {
  display: inline-block;
}
.mh-photo {
  height: 65px;
  width: 65px;
  border-radius: 100%;
}
.mh-lg {
  display: inline-block;
  font-size: 0.8rem;
  margin-top: 10px;
  position: relative;
  color: #fff;
}
ul,
ol {
  list-style: none;
}
ul {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  padding-inline-end: 40px;
  font-size: 12px;
}
.mh-list > li {
  background-color: #fff;
}
/* .border-1px {
  border-bottom: 10px #f1f1f1 solid;
} */
.border-1px {
  border-bottom: 1px #e4e4e6 solid;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.mh-list > li > a {
  display: -webkit-box;
  margin: 0 10px;
  line-height: 46px;
  font-size: 1rem;
  color: #3b3b3b;
  position: relative;
  -webkit-box-align: center;
}
#mh-lgout {
  display: block;
  line-height: 46px;
  font-size: 1rem;
  color: #666;
  text-align: center;
  border-top: 10px #f1f1f1 solid;
  border-bottom: 4px #f1f1f1 solid;
  background-color: #fff;
}
</style>
