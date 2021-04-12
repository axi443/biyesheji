<template>
  <div class="module-container" :style="{height:height,width:width}">
    <div v-show="option"
      :id="chartId"
      class="module-body bg"
      :style="{height:height,width:width}">
    </div>
    <sz-nodata v-show="!option" :height="parseInt(height.replace('px', ''))"></sz-nodata>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'sz-echart',
    props: {
        chartId: { // 图表id
            type: String,
            default() {
                return new Date().getTime().toString()
            }
        },
        height: { // 折线图高
            type:String,
            default() {
                return '500px'
            }
        },
        width: { // 折线图宽
            type: String,
            default() {
                return '700px'
            }
        },
        option: { // 折线图配置
            type: Object,
            default: ()=>{} // 数据
        },
        loading: { // 图形加载
          type: Boolean,
          default() {
              return false
          }
        },
    },
    data() {
        return {
          chart: null,
          empty: false,
        }
    },
    computed: {
      ...mapGetters({
        screenWidth: 'screenWidth',
        screenHeight: 'screenHeight',
      })
    },
    watch: {
      option(option) {
        if (option) {
          this.chart.setOption(this.option)
        } else {
          this.chart.clear()
        }
      },
      screenWidth() {
        this.resize()
      },
      screenHeight() {
        this.resize()
      }
    },
    mounted() {
      if (this.chart === null) {
        this.chart = this.$echarts.init(document.getElementById(this.chartId), null, this.opts)
      }
        
    },
    beforeDestroy() {
      if (this.chart !== null && this.chart !== '' && !(typeof this.chart === 'undefined')) {
          this.chart.clear()
      }
    },
    components: {
    },
    methods: {
      resize() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        
        this.timer = setTimeout(()=> {
          this.chart.resize()
        }, 60)
      }
    }
}
</script>