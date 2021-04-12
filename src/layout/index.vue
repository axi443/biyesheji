<template>
  <div class="layout pr">
    <head-section></head-section>
    <menus></menus>
    <app-main></app-main>

    <sz-loading v-if="loading" />
  </div>
</template>
<script type="text/javascript">
import headSection from './header/index.vue'
import menus from './menus/index.vue'
import appMain from './apps/index.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    headSection,
    menus,
    appMain
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  },
}
</script>