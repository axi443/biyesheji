import Vue from 'vue'
import szSvgIcon from './sz_svg_icon'// svg component
import szLoading from './sz_loading'
import szTree from './sz_tree'
import szNoData from './sz_no_data'
import szEchart from './sz_echart'
import szMap from './sz_map'

// register globally
Vue.component('sz-svgicon', szSvgIcon)
Vue.component('sz-loading', szLoading)
Vue.component('sz-tree', szTree)
Vue.component('sz-nodata', szNoData)
Vue.component('sz-echart', szEchart)
Vue.component('sz-map', szMap)