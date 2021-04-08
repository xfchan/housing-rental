<template>
  <div id="login">
    <RegisterLogin>
      <!-- 账号 -->
      <div class="form-item" id="phone" slot="account-number">
        <img
          src="~assets/img/register/icon_man.png"
          alt=""
          class="icon-space"
        />
        <input
          type="text"
          autofocus="autofocus"
          placeholder="用户名/电子邮箱/手机号"
          autocomplete="off"
          class="input-item username"
        />
      </div>
      <!-- 密码 -->
      <div class="form-item" id="phoneCode" slot="Code">
        <img
          src="~assets/img/register/icon_lock.png"
          alt=""
          class="icon-space-left"
          autocomplete="off"
        />
        <input
          type="password"
          name=""
          id="password"
          maxlength="100"
          placeholder="请输入密码"
          class="input-item password"
        />
        <img
          class="icon-space-right"
          src="~assets/img/register/icon_eyeclose.png"
          alt=""
        />
      </div>

      <span slot="shiyong" class="mobile-login margin-15 login-font">
        使用手机登录
      </span>
      <span
        id="forgetPassword"
        slot="wangji"
        class="forget-password margin-15 login-font"
      >
        忘记密码
      </span>
    </RegisterLogin>
  </div>
</template>

<script>
import RegisterLogin from "components/content/register-login/RegisterLogin";
export default {
  name: "Login",
  components: {
    RegisterLogin,
  },
};
</script>

<style scoped>
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
.forget-password {
  float: right;
  display: inline-block;
}
</style>
