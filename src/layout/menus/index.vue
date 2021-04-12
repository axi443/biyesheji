<template>
  <div class="menus-wrap pf">
    <div class="menu-scroll">
      <el-menu
        :default-active="activeMenu"
        mode="vertical">
        <sidebar-item v-for="route in routes" :key="route.path" 
          :item="route" 
          :base-path="route.path" />
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import router from '@/router'

export default {
  components: { SidebarItem },
  data() {
    return {
      routes: []  // route role config here
    }
  },
  computed: {
    ...mapGetters([
      
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  mounted() {
    this.routes = router.options.routes
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>

  .menus-wrap {
    width: @menuWidth;
    height: calc(100% - @headHeight);
    top: @headHeight;
    z-index: @zidxFrame;
    .boxshadow();

    .menu-scroll {
      overflow-x: hidden;
      height: 100%;
    }
  }
</style>