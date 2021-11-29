<template>
    <!-- <div style="padding: 56.25% 0 0 0; position: relative;"> -->
    <div class="embed-container" :class="{square: square}">
        <!-- <iframe :src="source" frameborder="0" allow="autoplay; fullscreen" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe> -->
        <iframe :src="source" frameborder="0" allow="autoplay; fullscreen"></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            source: "https://player.vimeo.com/video/" + this.videoID + "?background=1&dnt=true"
        }
    },
    props: {
        videoID: String,
        square: Boolean
    }
}
</script>

<style>
.embed-container { 
    position: relative; 
    padding-bottom: 56.25%; 
    height: 0; overflow: hidden; 
    max-width: 100%; height: auto;
    margin-bottom: var(--vertical-spacing);
}

.embed-container.square { 
    padding-bottom: 100%; 
}

.embed-container iframe, .embed-container object, .embed-container embed { 
   position: absolute; 
   top: 0; 
   left: 0; 
   width: 100%; 
   height: 100%; 
}
</style>