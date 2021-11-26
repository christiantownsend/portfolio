<template>
  <div>
    <Header />
    <div class="container">
        <div style="padding: calc(var(--vertical-spacing) * 4) 0;">
            <p>Who is this guy?</p>
            <div id="bio"><Content /></div>
        </div>
        <div class="grid">
            <div class="span-2 m-span-4 portrait">
                <img :src="this.$page.frontmatter.image" alt="Portrait" style="width: 90%;">
            </div>
            <div class="span-2 m-span-4">
                <div class="grid info-group">
                    <p class="span-2">How can I get in touch?</p>
                    <div class="span-2 lightened">
                        <p v-for="(link, index) in this.$page.frontmatter.links" :key="`link-${index}`">
                            <a :href="link.link">{{link.text}}</a>
                        </p>
                    </div>
                </div>

                <div class="grid info-group">
                    <p class="span-2">What's he into?</p>
                    <div class="span-2 lightened">
                        <p v-for="(interest, index) in this.$page.frontmatter.interests" :key="`interest-${index}`">
                            {{interest}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
.info-group, .portrait {
    margin-bottom: calc(var(--vertical-spacing) * 4)
}

#bio a {
    white-space: nowrap;
}
#bio p{
    font-size: 2.5rem;
}
</style>