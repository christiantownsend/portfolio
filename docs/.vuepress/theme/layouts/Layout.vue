<template>
  <div>
    <!-- <Header /> -->
    <div class="container">
      <hr>
      <router-link class="project no-arrow" v-for="(project, index) in projects" :key="project.key" :to="project.path" @mouseenter.native="activeProject = index">
        <div class="grid gap-horizontal-2 project-row pad-block-2" :class="{active: index == activeProject}">
          <div class="project-info span-6 grid gap-2 static pad-block-end-2">
            <p class="project-tags span-6 lighten">{{project.frontmatter.tags.join(", ")}}</p>
            <p class="project-title span-6 m-first"><a>{{project.frontmatter.title}}</a></p>
          </div>
          <div class="span-6 project-thumbnail-mask" style="pointer-events: none; position: relative; aspect-ratio: 16 / 9;">
            <!-- <img class="project-thumbnail project-placeholder" src="/static/placeholder.svg" alt="" srcset=""> -->
            <!-- <Placeholder class="project-thumbnail project-placeholder"/> -->
            <div class="project-preview">
              <img class="project-thumbnail" :src="project.frontmatter.thumb" alt="" srcset="">
              <vimeo :videoID="project.frontmatter.vimeo" />
            </div>
          </div>
        </div>
        <hr>
      </router-link>

    </div>
    <!-- <Content /> -->
  </div>
</template>

<script>
// import CustomCursor from '@theme/components/CustomCursor.vue'
// import Header from '@theme/components/Header.vue'
// import Footer from '@theme/components/Footer.vue'
// import Placeholder from '@theme/components/Placeholder.vue'
import '@theme/styles/index.styl'

export default {
  // components: { Placeholder },
  data() {
    return {
        projects: [],
        activeProject: 0
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
        // console.log(page.frontmatter)
        if (page.frontmatter.layout == 'project' && page.frontmatter.visible) {
          this.projects.push(page)
        }
    })

    this.projects.sort((a, b) => (a.frontmatter.order > b.frontmatter.order) ? 1 : -1);
  },
}
</script>

<style>
</style>