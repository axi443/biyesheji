<template>
  <div class="login-warp">
    <div class="warp-margin warp-padding">
      <p class="p-title">用户登录</p>

      <p class="p-line-warp">
        <span class="p-label">用户名：</span>
        <input
          class="p-content"
          type="text"
          name="account"
          v-model="username"
        />
      </p>
      <p class="p-line-warp">
        <span class="p-label">密 码：</span>
        <input
          class="p-content"
          type="password"
          name="account"
          v-model="password"
        />
      </p>
      <p class="p-line-warp">
        <el-button class="p-label" @click="onclickLogin">登录</el-button>
      </p>
    </div>
    <sz-loading v-if="loading" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      msg: "请求中……",
      password: "",
      username: "",
    };
  },
  computed: {
    ...mapGetters(["screenWidth", "screenHeight", "loading"]),
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
        }
      },
      immediate: true,
    },
  },
  methods: {
    // async onclickLogin() {
    //   this.$store.dispatch('login', {username: this.username, password: this.password, redirect: this.redirect})
    // },
    onclickLogin() {
      var errMsg = "";
      if (!/1[34578]{1}\d{9}/.test(this.username)) {
        errMsg += "用户名输入有误~\n";
      }
      // 判断密码是否为空
      if (this.password === "") {
        errMsg += "密码不能为空~";
      }
      if (errMsg !== "") {
        alert(errMsg);
      } else {
        this.$store.dispatch('login', {username: this.username, password: this.password, redirect: this.redirect}),
        setTimeout(() => {
          this.$router.push('/')
          this.$store.commit("LOADING", false)
        }, 2000);
      }
    },
    async onclickLogOut() {
      await this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="less" scoped>
.login-warp {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .warp-margin {
    .p-title {
      text-align: center;
      .height(50px);
    }
    .p-content {
      display: block;
      .height(32px);
      outline: 1px solid @gray;
      .borderRadius();
    }
  }
}
</style>
