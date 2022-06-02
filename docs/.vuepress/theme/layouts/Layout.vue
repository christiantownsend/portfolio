<template>
    <div class="container content">
      <hr>
      <router-link class="project no-arrow" v-for="(project, index) in projects" :key="project.key" :to="project.path" @mouseenter.native="activeProject = index">
        <div class="project-row pad-block-2 gap-horizontal-4 gap-vertical-2" :class="{active: index == activeProject}">
          <div class="project-info span-6 gap-1">
            <p class="project-title"><a>{{project.frontmatter.title}}</a></p>
            <div class="project-desc gap-2">
              <p class="project-year pill">{{project.frontmatter.year}}</p>
              <p class="project-tags">{{project.frontmatter.tags.join(", ")}}</p>
            </div>
          </div>
          <div class="span-6 project-thumbnail-mask" style="pointer-events: none; position: relative; aspect-ratio: 16 / 9;">
            <!-- <img class="project-thumbnail project-placeholder" src="/static/placeholder.svg" alt="" srcset=""> -->
            <!-- <Placeholder class="project-thumbnail project-placeholder"/> -->
            <div class="project-preview">
              <!-- <img class="project-thumbnail" :src="project.frontmatter.thumb" alt="" srcset=""> -->
              <vimeo :videoID="project.frontmatter.vimeo" :thumbnail="project.frontmatter.image" :placeholderColor="project.frontmatter.color"/>
            </div>
          </div>
        </div>
        <hr>
      </router-link>

    </div>
</template>

<script>
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