import { login, logout } from "@/api/login";
import { getJse } from "@/utils/get_jse";
import router from "@/router";

export default {
  login({ commit }, params) {
    var { username, password, redirect } = params;
    password = getJse(password);
    commit("LOADING", true);
    login({ userId: username, password }).then((res) => {
      if (res.status === 200 && res.data.success) {
        commit("LOGIN", res.data.data);
        var url = redirect ? redirect : "/index";
        router.push(url);
      } else {
        // login error
      }
      commit("LOADING", false);
    });
  },
  async logout({ commit }, params) {
    // await logout()
    commit("LOGOUT");
    if (confirm("确定退出吗？") === true) {
      commit("LOADING", true);
      setTimeout(() => {
        router.push("/login");
        commit("LOADING", false);
      }, 1500);
    }
  },
};
