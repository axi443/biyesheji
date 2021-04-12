<template>
  <div class="map-container">
    <super-map></super-map>
  </div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
import superMap from '@/components/sz_supermap'
export default {
  name: "supermap",
  props: {},
  components: {superMap},
  data() {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters([
        'user'
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
  .map-container {
    width: 100%;
    height: 100%;
  }
</style>
