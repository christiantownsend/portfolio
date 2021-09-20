<template>
  <div>
    <Header />
    <!-- <VimeoEmbed videoID="573454129" /> -->
    <div class="project-row" v-for="project in pages" :key="project.path">
        {{project.path}}
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
        console.log(page)
        this.pages.push(page)
    })
  }
}
</script>

<style>

</style>