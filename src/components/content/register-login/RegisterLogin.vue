<template>
  <main id="container">
    <article class="login">
      <div class="login-logo">
        <strong>安家客</strong>
      </div>
      <section class="container-logo-from">
        <!-- 手机号码 -->
        <slot name="account-number"></slot>
        <!-- 验证码/密码 -->
        <slot name="Code"></slot>
        <!-- 同意协议 -->
        <div id="loginAgreeMent" class="form-item agreement position">
          <p class="btn-wrapper" id="btn-wrapper">
            <i id="checkagree" class="checkimg"></i>
            <span class="agreee">登录/注册即代表你同意</span>
            <a href="https://m.anjuke.com/policy/service"
              >《安居客用户服务协议》</a
            >
            <span>及</span>
            <a href="https://m.anjuke.com/policy/privacy">《安居客隐私政策》</a>
          </p>
        </div>
        <div class="form-item">
          <button class="common-btn" id="btn-login">登 录</button>
        </div>
        <div class="form-item" id="accountLogin">
          <slot name="shiyong"></slot>
          <slot name="wangji"></slot>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "RegisterLogin",
};
</script>

<style scoped>
.login-logo {
  font-family: PingFangSC-Regular;

  color: #3db951;
  font-size: 35px;
  /* background-color: green; */
  width: 105px;
  height: 80px;
  display: block;
  margin: 0 auto;
  padding: 0 auto;
  padding-top: 41.5px;
  text-align: center;
}
.form-item {
  margin: 0 20px 0px 20px;
}
#phone {
  position: relative;
  margin-top: 40px;
  background-color: pink;
}
.icon-space {
  position: absolute;
  padding-left: 20px;
  top: 16px;
  /* vertical-align: middle; */
  border: 0;
  width: 40px;
  /* aspect-ratio: auto 20 / 20; */
  height: 20px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  /* background-color: blue; */
}
.input-item {
  width: 100%;
  height: 50px;
  background: #f8f9fb;
  font-size: 14px;
  border-radius: 0;
  box-sizing: border-box;
  padding: 0 50px 0 48px;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  -webkit-appearance: none;
  border: 0;
}
.yanzhengma {
  position: absolute;
  top: 0;
  right: 20px;
  float: right;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #c0c6cc;
  line-height: 14px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  /* background-color: green; */
  width: 70px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
#phoneCode {
  position: relative;
  /* background-color: pink; */
}
#yanzhengmaPhoneCode,
#password {
  margin-top: 15px;
  padding-right: 79px;
}
.icon-space-left {
  position: absolute;
  padding-left: 20px;
  top: 30px;
  /* vertical-align: middle; */
  border: 0;
  width: 40px;
  /* aspect-ratio: auto 20 / 20; */
  height: 20px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  /* background-color: blue; */
}
.position {
  position: relative;
}
.agreement {
  margin-top: 10px;
  /* margin-bottom: 25px; */
  margin-bottom: 5px;
  /* background-color: skyblue; */
}
.btn-wrapper {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #6b91b3;
  vertical-align: middle;
  line-height: 23px;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.btn-wrapper .checkimg {
  display: inline-block;
  margin-right: 8px;
  width: 12px;
  height: 12px;
  background: url(~assets/img/register/no_check.png) no-repeat;
  background-size: 12px 12px;
  vertical-align: inherit;
}
.btn-wrapper .agreee {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #9aa0a6;
  line-height: 20px;
}
.btn-wrapper span {
  vertical-align: inherit;
}
.btn-wrapper a {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #6b91b3;
  line-height: 20px;
  vertical-align: inherit;
}
a:link {
  text-decoration: none;
}
.btn-wrapper span {
  /* display: inline-block; */
  font-size: 12px;
  vertical-align: inherit;
  line-height: inherit;
  color: #6b91b3;
}
.common-btn {
  background: #3cb950;
  /* filter: alpha(opacity=50);
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5; */
  opacity: 0.2;
  width: 100%;
  height: 44px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
}
.common-btn {
  margin-top: 5px;
}
/* 可以登录的状态 */
.common-btn-nomal {
  background: #3cb950;
  width: 100%;
  height: 44px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
}
.login-font {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #9aa0a6;
  line-height: 12px;
}
.margin-15 {
  margin-top: 15px;
}
.mobile-login {
  display: inline-block;
  /* float: left; */
}
span {
  -webkit-tap-highlight-color: transparent;
}
.icon-space-right {
  position: absolute;
  right: 20px;
  top: 32px;
  float: right;
  z-index: 1000;
}
img {
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
</style>
