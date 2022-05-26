<template>
    <div>
        <CustomCursor />
        <Header v-if="layoutName != 'project'" />
        <ProjectHeader v-if="layoutName == 'project'"/>
        <component :is="layout" />
        <Footer />
    </div>
</template>

<script>
import Vue from 'vue'
import { setGlobalInfo } from '@app/util'

export default {
  name: 'GlobalLayout',
  data() {
    return {
      layoutName: '',
    }
  },
  computed: {
    layout () {
      const layout = this.getLayout()
      setGlobalInfo('layout', layout)
      this.layoutName = layout
      return Vue.component(layout)
    }
  },
  methods: {
    getLayout () {
      if (this.$page.path) {
        const layout = this.$page.frontmatter.layout
        if (layout && (this.$vuepress.getLayoutAsyncComponent(layout)
          || this.$vuepress.getVueComponent(layout))) {
          return layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>