<template>
  <div>

    <vimeo :videoID="$page.frontmatter.vimeo" :thumbnail="$page.frontmatter.thumb"/>
    
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
  </div>
</template>

<script>
// import Header from '@theme/components/Header.vue'
// import Footer from '@theme/components/Footer.vue'
// import Logo from '@theme/components/Logo.vue'
import '@theme/styles/index.styl'

export default {
    mounted() {
        // let vimeoScript = document.createElement("script")
        // vimeoScript.setAttribute("src", "https://player.vimeo.com/api/player.js")
        // document.head.appendChild(vimeoScript);
    }
}
</script>

<style>

</style>