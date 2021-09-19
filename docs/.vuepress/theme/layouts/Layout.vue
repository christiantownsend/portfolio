<template>
  <div>
    <Header />
    <!-- <VimeoEmbed videoID="573454129" /> -->
    <Content />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import VimeoEmbed from '../components/VimeoEmbed.vue'
import styles from '../styles/index.css'

export default {
  components: { Header, VimeoEmbed },
  mounted() {
    let vimeoScript = document.createElement("script")
    vimeoScript.setAttribute("src", "https://player.vimeo.com/api/player.js")
    document.head.appendChild(vimeoScript);
  }
}
</script>

<style>

</style>