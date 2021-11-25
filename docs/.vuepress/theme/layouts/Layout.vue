<template>
  <div>
    <Header />
    <!-- <VimeoEmbed videoID="573454129" /> -->
    <div class="container">

      <router-link class="no-arrow" v-for="(project, index) in projects" :key="project.key" :to="project.path" @mouseenter.native="activeProject = index">
        <div class="grid project-row" :class="{active: index == activeProject}">
          <div class="span-2 m-span-4">
            <div class="grid">
              <p class="span-2 lightened">{{project.frontmatter.tags.join(", ")}}</p>
              <p><a class="span-2">{{project.frontmatter.title}}</a></p>
            </div>
          </div>
          <div class="span-2 m-span-4" style="pointer-events: none; position: relative;">
            <img class="project-thumbnail" src="/static/placeholder.png" alt="" srcset="">
            <div class="project-preview">
              <img class="project-thumbnail" :src="project.frontmatter.thumb" alt="" srcset="">
              <VimeoEmbed :videoID="project.frontmatter.vimeo" />
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
import VimeoEmbed from '@theme/components/VimeoEmbed.vue'
import styles from '@theme/styles/index.css'

export default {
  components: { Header, VimeoEmbed, Footer },
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
  },
}
</script>

<style>
.project-row {
  padding: calc(var(--vertical-spacing)*2) 0
}

.project-preview {
  visibility: hidden;
}

.project-row.active .project-preview{
  visibility: visible;
}

.project-thumbnail {
  width: 100%;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
}
</style>