<template>
  <div>
    <header class="project-header container pad-block-3" style="position: fixed; z-index: 10; inset: 0 0 auto 0; display: flex; justify-content: space-between; align-items: center; mix-blend-mode: difference;">
        <div class="span-2">
            <router-link class="nav-link no-arrow" style="margin-left: 0;" to="/">← Back</router-link>
        </div>
        <div id="logo" style="fill: white">
            <Logo />
        </div>
    </header>

    <vimeo :videoID="$page.frontmatter.vimeo"/>

    
    <div class="container">
        <div class="grid pad-block-4">
            <div class="span-6 grid gap-1 static margin-block-end-2">
                <p class="span-6">{{ $page.frontmatter.title + ' (' + $page.frontmatter.year + ')' }}</p>
                <div class="span-6">
                    <p>Categories</p>
                    <p class="lighten">{{ $page.frontmatter.tags.join(', ') }}</p>

                    <p v-if="$page.frontmatter.collaborators" class="margin-block-start-1">Collaborators</p>
                    <a class="lighten" v-for="collaborator in $page.frontmatter.collaborators" :key="collaborator.name" :href="collaborator.link">{{ collaborator.name }}</a>
                </div>
            </div>
            <div class="span-6 lighten">
                {{ $page.frontmatter.description }}
            </div>
        </div>
        <hr>

        <Content class="grid gap-1 pad-block-1"/>
        
        <hr>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'
import Logo from '@theme/components/Logo.vue'
import styles from '@theme/styles/index.styl'

export default {
    components: { Header, Footer, Logo },
    mounted() {
        let vimeoScript = document.createElement("script")
        vimeoScript.setAttribute("src", "https://player.vimeo.com/api/player.js")
        document.head.appendChild(vimeoScript);
    }
}
</script>

<style>

</style>