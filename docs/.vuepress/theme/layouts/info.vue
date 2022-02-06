<template>
  <div>
    <Header />
    <div class="container">
        <hr>
        <div class="pad-block-4">
            <p class="margin-block-end-1">Who is this guy?</p>
            <div id="bio" style="width: 100%; max-width: 130ch"><Content /></div>
        </div>
        <div class="grid">
            <div class="span-6 margin-block-end-4">
                <img :src="this.$page.frontmatter.image" alt="Portrait" style="width: 90%;">
            </div>
            <div class="span-6">
                <div class="grid margin-block-end-4">
                    <p class="span-6 margin-block-end-1">How can I get in touch?</p>
                    <ul class="span-6 lighten" role="list">
                        <li v-for="(link, index) in this.$page.frontmatter.links" :key="`link-${index}`">
                            <a :href="link.link">{{link.text}}</a>
                        </li>
                    </ul>
                </div>

                <div class="grid margin-block-end-4">
                    <p class="span-6  margin-block-end-1">What's he into?</p>
                    <ul class="span-6 lighten" role="list">
                        <li v-for="(interest, index) in this.$page.frontmatter.interests" :key="`interest-${index}`">
                            {{interest}}
                        </li>
                    </ul>
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
import styles from '@theme/styles/index.styl'

export default {
    components: { Header, Footer },
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
    font-size: 2.25em;
}

@media only screen and (max-width: 1000px) {
    #bio p {
        font-size: 1.5em;
    }
}
</style>