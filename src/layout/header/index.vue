<template>
  <div class="head-wrap pf">
    <div class="head-content ps">
      {{ user.realName }}
      <button @click="logout">登出</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapGetters } from "vuex";
export default {
  props: {},
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout", true);
    },
  },
};
</script>
<style lang="less" scoped>
.head-wrap {
  .height(@headHeight);
  width: 100%;
  background: @hoverBg;
  z-index: @zidxFrame;
  .boxshadow();

  .head-content {
    right: 20px;
  }
}
</style>
