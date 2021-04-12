<template>
  <div id="map"></div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
import TileSuperMapRest from './tile_supermap_rest.js';

export default {
  name: "szSperMap",
  props: {},
  components: {},
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
  mounted() {
    var map, url = "http://192.168.1.120:8090/iserver/services/map-PopulationAndEconomy/rest/maps/2014%E5%B9%B4%E4%BA%BA%E5%8F%A3%E5%AF%86%E5%BA%A6%E4%B8%93%E9%A2%98%E5%9B%BE";
    map = new ol.Map({
        target: 'map',
        controls: ol.control.defaults().extend([
          new ol.control.ScaleLine({
            target: document.getElementById('scaleline')
          })
        ]),
        view: new ol.View({
            center: [11630660.398081223, 4280001.184277043],
            zoom: 4,
            projection: 'EPSG:3857',
            multiWorld: true
        })
    });
    var layer = new ol.layer.Tile({
        source: new TileSuperMapRest({
            url: url,
            wrapX: true
        }),
        projection: 'EPSG:3857'
    });
    // WMS
    
    var layer = new ol.layer.Tile({
            opacity: 0.7,
            source: new ol.source.TileWMS({
                url: (window.isLocal ? window.server : "https://iserver.supermap.io")+"/iserver/services/map-china400/wms111/China",
                params: {
                    'LAYERS': 'China',
                    'FORMAT': 'image/png'
                },
                attributions: "Map Data <span>© <a href='http://support.supermap.com.cn/product/iServer.aspx' target='_blank'>SuperMap iServer</a></span> with <span>© <a href='http://iclient.supermap.io' target='_blank'>SuperMap iClient</a></span>"
            }),

        })
    map.addLayer(layer);
  },
  methods: {

  }
}
</script>
<style 
  lang="less" scoped>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
