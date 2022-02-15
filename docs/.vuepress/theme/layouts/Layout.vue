<template>
  <div>
    <Header />
    <div class="container">
      <hr>
      <router-link class="project no-arrow" v-for="(project, index) in projects" :key="project.key" :to="project.path" @mouseenter.native="activeProject = index">
        <div class="grid gap-horizontal-1 project-row pad-block-2" :class="{active: index == activeProject}">
          <div class="span-6 grid gap-1 static pad-block-end-2">
              <p class="span-6 lighten">{{project.frontmatter.tags.join(", ")}}</p>
              <p class="span-6 m-first"><a>{{project.frontmatter.title}}</a></p>
          </div>
          <div class="span-6" style="pointer-events: none; position: relative;">
            <!-- <img class="project-thumbnail project-placeholder" src="/static/placeholder.svg" alt="" srcset=""> -->
            <Placeholder class="project-thumbnail project-placeholder"/>
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
    <Footer />
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'
import Placeholder from '@theme/components/Placeholder.vue'
import '@theme/styles/index.styl'

export default {
  components: { Header, Footer, Placeholder },
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