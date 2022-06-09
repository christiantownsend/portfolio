<template>
  <div>
    <!-- <Header /> -->
    <div class="container">
        <hr>
        <div id="profile-bio" class="grid pad-block-2 gap-2">
            <img class="span-6" :src="this.$page.frontmatter.image" alt="Portrait">
            <div id="bio" class="span-6 m-first" style="max-width: 130ch"><Content /></div>
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
                        <a :href="feature.link" target="_blank" rel="noopener noreferrer">{{feature.text}}</a>
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
import '@theme/styles/index.styl'

export default {}
</script>

<style>
/* .info-group, .portrait {
    margin-bottom: calc(var(--vertical-spacing) * 4)
} */

#bio a {
    white-space: nowrap;
}

#bio p:not(:last-of-type) {
    margin-bottom: calc(var(--spacing-unit) * 2);
}

#bio p {
    line-height: 1.25;
    /* font-weight: 500; */
    /* font-size: clamp(1.50rem, calc(0.50rem + 2.00vw), 3.50rem); */
    font-size: clamp(1.25rem, calc(0.13rem + 2.25vw), 3.50rem);
}

.profile-info-group {
    border-top: 1px solid var(--color-neutral-100-t);
    grid-auto-rows: minmax(min-content, max-content);
}

@media (hover: hover), (-ms-high-contrast:none) {
    .profile-info-group:hover .pill {
        color: var(--color-neutral-900);
        background: var(--color-neutral-100);
        /* transform: scale(1.075); */
    }
}
</style>