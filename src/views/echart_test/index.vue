<template>
  <div class="warp-margin">
    <sz-echart id="lineChart" 
      :loading="timeLoading" 
      :option="timeLineOption"
      width="900px"
      height="500px">
    </sz-echart>

    <sz-echart id="barChart" 
      :loading="timeLoading" 
      :option="timeBarOption"
      width="900px"
      height="500px">
    </sz-echart>

    <sz-echart id="pieChart" 
      :loading="timeLoading" 
      :option="pieOption"
      width="900px"
      height="500px">
    </sz-echart>
  </div>
</template>
<script>

export default {
  name: 'echartTest',
  components: {
  },
  data() {
      return {
        timeLineOption: {},
        timeBarOption: {},
        pieOption: {},
        timeLoading: false,
      }
  },
  mounted() {
    this.setLineOption()
    this.setBarOption()
    this.setPieOptions()
  },
  methods: {
    setLineOption() {
      this.timeLineOption = {
        tooltip: {
          show: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
      }
    },
    setBarOption() {
      this.timeBarOption = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      };
    },
    setPieOptions() {
      this.pieOption = {
        title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      };
    }
  }
}
</script>
<style lang="less" scoped>
#test-echart {
  
}
</style>