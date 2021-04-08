<template>
  <div id="register">
    <RegisterLogin>
      <!-- 账号 -->
      <div class="form-item" id="phone" slot="account-number">
        <img
          src="~assets/img/register/icon_phone.png"
          alt=""
          class="icon-space"
        />
        <input
          type="tel"
          maxlength="11"
          autofocus="autofocus"
          placeholder="请输入手机号码"
          autocomplete="off"
          class="input-item username"
        />
        <div class="yanzhengma">获取验证码</div>
      </div>

      <!-- 验证码 -->
      <div class="form-item" id="phoneCode" slot="Code">
        <img
          src="~assets/img/register/icon_dun.png"
          alt=""
          class="icon-space-left"
          autocomplete="off"
        />
        <input
          type="tel"
          name=""
          id="yanzhengmaPhoneCode"
          maxlength="6"
          placeholder="请输入手机动态码"
          class="input-item password"
        />
      </div>

      <span slot="shiyong" class="mobile-login margin-15 login-font">
        使用账号登录
      </span>
    </RegisterLogin>
  </div>
</template>

<script>
import RegisterLogin from "components/content/register-login/RegisterLogin";

export default {
  name: "Register",
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
</style>
