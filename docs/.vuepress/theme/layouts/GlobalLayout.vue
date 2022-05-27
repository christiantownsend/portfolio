<template>
  <div>
    <div id="transition-element" :class="transitioning ? 'transitioning' : ''" :style="'background-color: ' + this.transitionColor + ';'"></div>
    <CustomCursor />
    <transition
      mode="out-in"
      :duration="250"
    >
      <Header v-if="layoutName != 'project'" />
      <ProjectHeader v-else/>
    </transition>
    <transition
      @leave="leave"
      @enter="enter"
      mode="out-in"
      :css="false"
    >
      <component :is="layout" />
    </transition>
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
      transitioning: false,
      transitionColor: 'var(--color-neutral-100)'
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
    },
    enter(el, done) {
      console.log("TRANSITION Ended")
      // console.log(el.__vue__.$page.frontmatter.color);
      this.transitioning = false
      done()
    },
    leave(el, done) {
      console.log("TRANSITION Started")
      const color = el.__vue__.$page.frontmatter.color || "var(--color-neutral-100)"
      this.transitionColor = color;
      this.transitioning = true
      setTimeout(done, 400);
    },
  }
}
</script>

<style>
#transition-element {
  /* display: none; */
  position: fixed;
  inset: 0;
  background-color: var(--color-neutral-100);
  z-index: 9999;
  transition: transform .25s cubic-bezier(1, 0, 0, 1);

  /* opacity: .5; */
  /* mix-blend-mode: exclusion; */
  
  transform-origin: bottom right;
  transform: scaleX(0);
}

#transition-element.transitioning {

  transform-origin: top left;
  transform: scaleX(1);
}

</style>