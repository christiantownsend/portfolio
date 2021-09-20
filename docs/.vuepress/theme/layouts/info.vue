<template>
  <div>
    <Header />
    <div class="container">
        <div style="padding: calc(var(--vertical-spacing) * 6) 0;">
            <p>Who is this guy?</p>
            <div id="bio"><Content /></div>
        </div>
        <div class="grid">
            <div class="portrait">
                <img :src="this.$page.frontmatter.image" alt="Portrait" style="width: 90%;">
            </div>
            <div>
                <div class="grid info-group">
                    <p>How can I get in touch?</p>
                    <div class="lightened">
                        <p v-for="(link, index) in this.$page.frontmatter.links" :key="`link-${index}`">
                            <a :href="link.link">{{link.text}}</a>
                        </p>
                    </div>
                </div>

                <div class="grid info-group">
                    <p>What's he into?</p>
                    <div class="lightened">
                        <p v-for="(interest, index) in this.$page.frontmatter.interests" :key="`interest-${index}`">
                            {{interest}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.grid div, .grid p {
    grid-column: span 1;
}

.info-group {
    margin-bottom: calc(var(--vertical-spacing) * 4)
}

#bio a {
    white-space: nowrap;
}
#bio p{
    font-size: 2.5rem;
}
</style>