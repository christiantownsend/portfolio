<template>
  <div>
    <!-- <Header /> -->
    <div class="container">
        <hr>
        <!-- <div class="pad-block-4">
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
        </div> -->
        <div id="profile-bio" class="grid pad-block-2 gap-2">
            <img class="span-6" :src="this.$page.frontmatter.image" alt="Portrait">
            <div id="bio" class="span-6" style="max-width: 130ch"><Content /></div>
        </div>
        <div id="profile-info" class="grid gap-horizontal-2">
            <div class="profile-info-group pad-block-2 span-6 grid gap-2 static">
                <div class="span-6">
                    <div class="small pill" style="max-width: max-content;">Check me out</div>
                </div>
                <ul class="span-6" role="list">
                    <li v-for="(link, index) in this.$page.frontmatter.links" :key="`link-${index}`">
                        <a :href="link.link">{{link.text}}</a>
                    </li>
                </ul>
            </div>
            <div class="profile-info-group pad-block-2 span-6 grid gap-2 static">
                <div class="span-6">
                    <div class="small pill" style="max-width: max-content;">Capabilities</div>
                </div>
                <ul class="span-6" role="list">
                    <li v-for="(capability, index) in this.$page.frontmatter.capabilities" :key="`capability-${index}`">
                        {{capability}}
                    </li>
                </ul>
            </div>
            <div class="profile-info-group pad-block-2 span-6 grid gap-2 static">
                <div class="span-6">
                    <div class="small pill" style="max-width: max-content;">Features</div>
                </div>
                <ul class="span-6" role="list">
                    <li v-for="(feature, index) in this.$page.frontmatter.features" :key="`feature-${index}`">
                        <a :href="feature.link">{{feature.text}}</a>
                    </li>
                </ul>
            </div>
            <div class="profile-info-group pad-block-2 span-6 grid gap-2 static">
                <div class="span-6">
                    <div class="small pill" style="max-width: max-content;">Interests</div>
                </div>
                <ul class="span-6" role="list">
                    <li v-for="(interest, index) in this.$page.frontmatter.interests" :key="`interest-${index}`">
                        {{interest}}
                    </li>
                </ul>
            </div>
        </div>
        <hr>
    </div>
  </div>
</template>

<script>
// import CustomCursor from '@theme/components/CustomCursor.vue'
// import Header from '@theme/components/Header.vue'
// import Footer from '@theme/components/Footer.vue'
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
/* .info-group, .portrait {
    margin-bottom: calc(var(--vertical-spacing) * 4)
} */

#bio a {
    white-space: nowrap;
}
#bio p{
    /* font-size: 1.8em; */
    font-size: clamp(1.25rem, calc(0.42rem + 1.67vw), 1.88rem);
    margin-bottom: var(--spacing-unit);
}

.profile-info-group {
    border-top: 1px solid var(--color-neutral-100-t);
    grid-auto-rows: minmax(min-content, max-content);
}
</style>