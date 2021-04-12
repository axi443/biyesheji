<template>
  <!-- 是否应该盖住头和菜单 -->
  <div class="sz-loading">
    <div class="mask-transparent"></div>
    <div class="loading-warp">
      <sz-svgicon class="svg-loading" style="width: 38px;height: 38px;" icon-class="loading"></sz-svgicon>
      <p class="weui-toast__content">数据加载中</p>
    </div>
  </div>
    
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters([
        'userInfo'
    ])
  },
  filters: {},
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(val, oldVal) {
        
      }
    }
  },
  mounted() {},
  methods: {

  }
}
</script>
<style 
  lang="less" scoped>
.sz-loading {
  .mask-transparent {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .loading-warp {
    position: fixed;
    z-index: 5000;
    width: 120px;
    height: 120px;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    border-radius: 5px;
    color: hsla(0,0%,100%,.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #4c4c4c;
    .svg-loading {
      margin: 8px 0;
      width: 38px;
      height: 38px;
      vertical-align: baseline;
      display: inline-block;
      vertical-align: middle;
      animation: weuiLoading 1s steps(12) infinite;
      background-size: 100%;
    }
      
  }
}
  
@-webkit-keyframes weuiLoading {
  0% {
    -webkit-transform: rotate3d(0,0,1,0deg);
    transform: rotate3d(0,0,1,0deg);
  }

  100% {
    -webkit-transform: rotate3d(0,0,1,360deg);
    transform: rotate3d(0,0,1,360deg);
  }
}

@keyframes weuiLoading {
  0% {
    -webkit-transform: rotate3d(0,0,1,0deg);
    transform: rotate3d(0,0,1,0deg);
  }

  100% {
    -webkit-transform: rotate3d(0,0,1,360deg);
    transform: rotate3d(0,0,1,360deg);
  }
}
</style>