<template>
    <div style="padding: 56.25% 0 0 0; position: relative;">
        <iframe :src="source" frameborder="0" allow="autoplay; fullscreen" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
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
        videoID: String
    }
}
</script>

<style>
</style>