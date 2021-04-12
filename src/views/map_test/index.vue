<template>
  <div class="map-container pr">
    <sz-map ref="map"></sz-map>

    <div
      id="overlayEl"
      class="ps warp-padding"
      :style="{
        top: overlayPosition[0] + 'px',
        left: overlayPosition[1] + 'px',
      }"
    >
      overlay text
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapGetters } from "vuex";
export default {
  name: "map_test",
  props: {},
  components: {},
  data() {
    return {
      overlay: null,
      overlayPosition: [-1000, -1000],
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  filters: {},
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(val, oldVal) {},
    },
  },
  mounted() {
    this.styleCache = {};
    // point example
    this.renderPoint();
    this.renderClusterPoint();
  },
  methods: {
    renderPoint() {
      var geom = {
        type: "MultiPoint",
        coordinates: [
          [120.3, 35.5],
          [121.3, 32.5],
        ],
      };
      var transform = true;
      var feature = this.$refs.map.getVectorFeature(
        geom,
        { id: 1, name: "多个点属性一致" },
        transform
      );
      console.log(
        "getGeomExtent",
        this.$refs.map.getGeomExtent(feature.getGeometry())
      );
      feature.setId(1);
      var style = new ol.style.Style({
        image: new ol.style.Circle({
          fill: new ol.style.Fill({
            color: "rgba(255,255,255,0.4)",
          }),
          stroke: new ol.style.Stroke({
            color: "#3399CC",
            width: 2,
          }),
          radius: 5,
        }),
        zIndex: 14,
      });
      var style1 = new ol.style.Style({
        image: new ol.style.Icon({
          src: require("@/assets/logo.png"),
          scale: 0.2,
          offset: [20, 0],
        }),
        zIndex: 13,
      });
      var style2 = new ol.style.Style({
        image: new ol.style.Chart({
          type: "pie",
          radius: 20,
          data: [10, 30, 20],
          rotateWithView: true,
          stroke: new ol.style.Stroke({
            color: "#fff",
            width: 2,
          }),
          offsetX: -150,
        }),
        text: new ol.style.Text({
          text: "文本内容",
          //文本样式
          font: "12px Calibri,sans-serif",
          fill: new ol.style.Fill({
            color: "#0aa1eb",
          }),
          stroke: new ol.style.Stroke({
            color: "#fff",
            width: 3,
          }),
          offsetX: -100,
        }),
        zIndex: 13,
      });
      var layer = this.$refs.map.getVectorLayer(
        [feature],
        [style, style1, style2],
        100
      );
      this.$refs.map.addLayer(layer);

      // 需要先  feature.setId(1)
      var _feature = this.$refs.map.layerGetFeatureById(layer, 1);
      console.log("layerGetFeatureById", _feature);

      this.$refs.map.layerForEachFeature(layer, (feature) => {
        console.log("layerForEachFeature", feature);
      });

      var listenerKey;
      const doAnimate = () => {
        if (listenerKey) return;
        var start = new Date().getTime();
        var duration = 1000;
        var animation = 0;
        listenerKey = layer.on(["precompose", "prerender"], function(event) {
          var frameState = event.frameState;
          var elapsed = frameState.time - start;
          if (elapsed > duration) {
            ol.Observable.unByKey(listenerKey);
            listenerKey = null;
            animation = false;
          } else {
            animation = ol.easing.easeOut(elapsed / duration);
            frameState.animate = true;
            style2.getImage().setAnimation(animation);
          }
          // layer.changed();
        });
        // Force redraw
        layer.changed();
        //map.renderSync();
      };
      setTimeout(() => {
        doAnimate();
      }, 200);
    },
    renderClusterPoint() {
      var coordinates = [
        [125.3, 35.5],
        [121.3, 34.5],
      ];
      var features = [];
      var transform = true;
      for (let i = 0; i < coordinates.length; i++) {
        var geom = { type: "Point", coordinates: coordinates[i] };
        var fe = this.$refs.map.getVectorFeature(
          geom,
          { name: "属性不一致" + i },
          transform
        );
        features.push(fe);
      }

      var style = (feature) => {
        var size = feature.get("features").length;
        var style = this.styleCache[size];
        if (!style) {
          style = new ol.style.Style({
            image: new ol.style.Circle({
              radius: 10,
              stroke: new ol.style.Stroke({
                color: "#fff",
              }),
              fill: new ol.style.Fill({
                color: "#3399CC",
              }),
            }),
            text: new ol.style.Text({
              text: size.toString(),
              fill: new ol.style.Fill({
                color: "#fff",
              }),
            }),
          });
          this.styleCache[size] = style;
        }
        return style;
      };
      var layer = this.$refs.map.getClusterLayer(features, style, 100);
      this.$refs.map.addLayer(layer);

      this.$refs.map.layerOnClick(layer, (features) => {
        if (features.length > 0) {
          var prop = features[0].getProperties();
          if (prop.features.length > 0) {
            for (var i = 0; i < prop.features.length; i++) {
              console.log(
                `layerOnClick 第 ${i} 个`,
                prop.features[i].getProperties().properties.name
              );
              features[i] && this.addOverlay(features[i]);
            }
          }
        }
      });
    },
    addOverlay(feature) {
      var coordinates = feature.getGeometry().getCoordinates();
      var element = document.getElementById("overlayEl");
      var position = this.$refs.map.getOverlayPosition(
        element,
        coordinates,
        10,
        10,
        180
      );
      this.overlayPosition = [position.top, position.left];

      this.overlay = this.$refs.map.addOverlay(
        coordinates,
        element,
        this.overlay
      );
    },
  },
};
</script>
<style lang="less" scoped>
.map-container {
  height: 100%;
}
#overlayEl {
  top: 10px;
  left: 20px;
  width: 100px;
  background: #fff;
  .borderRadius();
}
</style>
