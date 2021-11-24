<template>
  <div>
    <Header />
    <!-- <VimeoEmbed videoID="573454129" /> -->
    <div class="container">
      <router-link class="project-row grid no-arrow" v-for="project in pages" :key="project.key" :to="project.path">
          <div class="span-2 m-span-4">
            <div class="grid">
              <p class="span-2 lightened">{{project.frontmatter.tags.join(", ")}}</p>
              <p><a class="span-2">{{project.frontmatter.title}}</a></p>
            </div>
          </div>
          <div class="span-2 m-span-4">
            <VimeoEmbed :videoID="project.frontmatter.vimeo" />
          </div>
      </router-link>
    </div>
    <Content />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import VimeoEmbed from '../components/VimeoEmbed.vue'
import styles from '../styles/index.css'

export default {
  components: { Header, VimeoEmbed },
  data() {
    return {
        pages: []
    }
  },
  mounted() {
    let vimeoScript = document.createElement("script")
    vimeoScript.setAttribute("src", "https://player.vimeo.com/api/player.js")
    document.head.appendChild(vimeoScript);

    this.$site.pages.forEach(page => {
        console.log(page.frontmatter)
        if (page.frontmatter.layout == 'project' && page.frontmatter.visible) {
          this.pages.push(page)
        }
    })
  }
}
</script>

<style>

</style>