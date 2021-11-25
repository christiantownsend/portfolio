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
    <VimeoEmbed :videoID="$page.frontmatter.vimeo" />
    <div class="container">
        <div class="grid" style="padding-top: calc(var(--vertical-spacing)*2)">
            <div class="span-2 m-span-4 grid" style="margin-bottom: calc(var(--vertical-spacing)*2)">
                <div class="span-2">{{ $page.frontmatter.title + ' (' + $page.frontmatter.year + ')' }}</div>
                <div class="span-2">
                    <p>Categories</p>
                    <p class="lightened">{{ $page.frontmatter.tags.join(', ') }}</p>

                    <p v-if="$page.frontmatter.collaborators">Collaborators</p>
                    <a class="lightened" v-for="collaborator in $page.frontmatter.collaborators" :key="collaborator.name" :href="collaborator.link">{{ collaborator.name }}</a>
                </div>
            </div>
            <div class="span-2 m-span-4 lightened" style="margin-bottom: calc(var(--vertical-spacing)*2)">
                {{ $page.frontmatter.description }}
            </div>
        </div>
        <hr>

        <Content class="content-container grid gutter"/>
        <hr>
    </div>
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
    mounted() {
        let vimeoScript = document.createElement("script")
        vimeoScript.setAttribute("src", "https://player.vimeo.com/api/player.js")
        document.head.appendChild(vimeoScript);
    }
}
</script>

<style>

</style>