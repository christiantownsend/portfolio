<template>
  <div>

    <!-- <vimeo :videoID="$page.frontmatter.vimeo" :thumbnail="$page.frontmatter.image"/> -->

    <!-- <video autoplay muted loop style="width: 100%">
        <source :src="$page.frontmatter.videoUrl" type="video/mp4"/>
    </video> -->
    <vid :src="$page.frontmatter.videoUrl" side="bottom" style="height: 100vh; object-fit: cover"/>
    
    <div class="container">
        <div class="grid pad-block-4">
            <div class="span-6 grid gap-2 static margin-block-end-2">
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

        <Content class="grid gap-2 pad-block-2"/>
        
        <hr>
    </div>
  </div>
</template>

<script>
import '@theme/styles/index.styl'

export default {}
</script>

<style>

</style>