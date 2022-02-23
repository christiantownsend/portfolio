<template>
    <div :style="'aspect-ratio: ' +  (aspectRatio || '16 / 9') + '; position: relative;'">
        <iframe :src="source" frameborder="0" allow="autoplay; fullscreen" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            source: "https://player.vimeo.com/video/" + this.videoID + "?background=1&dnt=1&quality=" + (this.quality || 'auto')
        }
    },
    props: {
        videoID: String,
        aspectRatio: String,
        quality: String
    }
}
</script>