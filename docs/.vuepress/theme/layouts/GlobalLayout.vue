<template>
  <div>
    <div id="transition-element" :class="(transitioning ? 'transitioning ' : '') + (transitionDirection)" :style="'background-color: ' + transitionColor + ';' + (transitionOverlayActive ? 'opacity: 1;' : 'opacity: 0;')"></div>
    <CustomCursor />
    <transition
      mode="out-in"
    >
      <Header v-if="layoutName != 'project'" />
      <ProjectHeader v-else/>
    </transition>
    <transition
      :name="transitionName"
      @leave="leave"
      @enter="enter"
      mode="out-in"
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
      transitionOverlayActive: false,
      transitionName: 'slide-left',
      transitionDirection: 'left',
      transitionColor: 'var(--color-neutral-100)',
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
  watch: {
    '$route'(to, from){
      const to_depth = to.path.split('/').length
      const from_depth = from.path.split('/').length

      if (to_depth < from_depth) {
        // GOING BACK
        this.transitionName = 'slide-left'
        this.transitionDirection = 'left'
      }
      else {
        this.transitionName = 'slide-right'
        this.transitionDirection = 'right'
      }

      if (to.path.startsWith('/work/') || from.path.startsWith('/work/')) {
        this.transitionName = 'none'
        this.transitionOverlayActive = true;
      }
      else {
        this.transitionOverlayActive = false;
      }
      // this.transitionDirection = to_depth < from_depth ? 'left' : 'right'
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
    leave(el, done) {
      // console.log("TRANSITION Started")
      const color = el.__vue__.$page.frontmatter.color || "var(--color-neutral-100)"
      this.transitionColor = color;
      this.transitioning = true
      setTimeout(done, 400);
    },
    enter(el, done) {
      this.transitioning = false
      // done()
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
  transition: transform var(--transition-duration) cubic-bezier(1, 0, 0, 1);

  /* opacity: .5; */
  /* mix-blend-mode: exclusion; */
  
  transform: scaleX(0);
}

#transition-element.left {transform-origin: bottom right;}
#transition-element.right {transform-origin: top left;}
#transition-element.transitioning.left {transform-origin: top left;}
#transition-element.transitioning.right {transform-origin: bottom right;}

#transition-element.transitioning {
  transform: scaleX(1);
}

.v-enter-active,
.v-leave-active {
  transition: all var(--transition-duration) ease;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all calc(var(--transition-duration) * 2) ease;
}

.slide-right-enter,
.slide-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-left-enter,
.slide-right-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>