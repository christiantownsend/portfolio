<template>
  <div>
    <header class="grid">
        <div class="span-2">
            <router-link class="nav-link no-arrow" to="/">← Back</router-link>
        </div>
        <div id="logo" class="span-2" style="place-self: center end;">
            <img src="/static/icon-bold-white.svg" alt="Logo">
        </div>
    </header>
    <VimeoEmbed videoID="573454129" />
    <div class="container">
        <Content />
    </div>
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