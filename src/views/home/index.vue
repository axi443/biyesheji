<template>
  <div class="warp-margin warp-padding">
    <p class="p-title">我是标题</p>
    <p class="p-line-warp" v-for="item in list" :key="item.id">
      <span class="p-label">{{item.title}}：</span>
      <span class="p-content">{{item.content}}</span>
    </p>
  </div>
</template>
<script type="text/javascript">
import { homeList, reptile } from '@/api/home.js'
export default {
  props: {},
  components: {
    
  },
  data() {
    return {
      list: []
    }
  },
  filters: {},
  watch: {
    
  },
  mounted() {
    homeList().then((res)=> {
      if (res.data.code === 0) {
        this.list = res.data.data  
        console.log(this.list)
      }
    })
    // http://111.205.51.26:8091/AnmialSlaughter/Image/Watermark/file_164751183325918270000.jpg
    // this.county = 20
    // this.getCounty(undefined).then((res)=> {
    //   var count = res.data.total
    //   this.doReq(undefined, count)
    // })
  },
  methods: {
    doReq(Id, count) {
      var obj = {"ProvinceName":null,"Id": 0,"EnterpriseName":null,"Address":null,"SlaughterCard":null,"Remark":null,"Xh":0,"CountyId": Id,"PublishDate":"0001-01-01T00:00:00","IsOneMonth":false,"Slaughterpath":null,"Vaccinationpath":null,"Dischargepath":null}
      var data = {
        Parms: JSON.stringify(obj),
        pageNumber: 1,
        pageSize: count
      }
      reptile(data).then((res)=> {
        console.log(JSON.stringify(res.data))
      })
    },
    async getCounty(Id) {
      var obj = {"ProvinceName":null,"Id": 0,"EnterpriseName":null,"Address":null,"SlaughterCard":null,"Remark":null,"Xh":0,"CountyId": Id,"PublishDate":"0001-01-01T00:00:00","IsOneMonth":false,"Slaughterpath":null,"Vaccinationpath":null,"Dischargepath":null}
      var data = {
        Parms: JSON.stringify(obj),
        pageNumber: 1,
        pageSize: 20
      }
      return await reptile(data).then()
    }
  }
}
</script>
<style 
  lang="less" scoped>

// must has style 
.gray {
  color: @subFont;
}
.warp-margin {
  width: calc(100% - 44px);
  box-sizing: border-box;
  height: calc(100% - 24px);
}
</style>