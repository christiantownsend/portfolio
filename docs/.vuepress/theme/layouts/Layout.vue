<template>
  <div>
    <Header />
    <div class="container">
      <hr>
      <router-link class="project no-arrow" v-for="(project, index) in projects" :key="project.key" :to="project.path" @mouseenter.native="activeProject = index">
        <div class="grid project-row pad-block-2" :class="{active: index == activeProject}">
          <div class="span-6 grid static pad-block-end-2">
              <p class="span-6 pad-inline-end-1 lighten">{{project.frontmatter.tags.join(", ")}}</p>
              <p class="span-6 pad-inline-end-1 m-first"><a>{{project.frontmatter.title}}</a></p>
          </div>
          <div class="span-6" style="pointer-events: none; position: relative;">
            <img class="project-thumbnail project-placeholder" src="/static/placeholder.png" alt="" srcset="">
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
import styles from '@theme/styles/index.styl'

export default {
  components: { Header, Footer },
  data() {
    return {
        projects: [],
        activeProject: 0
    }
  },
  mounted() {
    let vimeoScript = document.createElement("script")
    vimeoScript.setAttribute("src", "https://player.vimeo.com/api/player.js")
    document.head.appendChild(vimeoScript);

    this.$site.pages.forEach(page => {
        // console.log(page.frontmatter)
        if (page.frontmatter.layout == 'project' && page.frontmatter.visible) {
          this.projects.push(page)
        }
    })

    this.projects.sort((a, b) => (a.frontmatter.year < b.frontmatter.year) ? 1 : -1);
  },
}
</script>

<style>
</style>