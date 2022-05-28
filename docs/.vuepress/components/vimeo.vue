<template>
    <div :style="'aspect-ratio: ' +  (aspectRatio || '16 / 9') + '; position: relative; overflow: hidden'">
        <div style="position: absolute; inset: 0; background: transparent; z-index: 2;"></div> <!-- THIS IS TO MAKE CURSOR INTERACTIONS OVER THE IFRAME WORK -->
        <iframe :src="source" frameborder="0" allow="fullscreen" style="position: absolute; inset: -3px; width: calc(100% + 6px); height: calc(100% + 6px); display: block"></iframe>
        <div :class="'vimeo-loader ' + (thumbnail ? '' : 'vimeo-loader-animate')" :style="'background:' + (thumbnail ? 'url(' + thumbnail + ')' : null || placeholderColor || $page.frontmatter.color || 'var(--color-neutral-100-t)') + ' no-repeat center/cover;'"></div>
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
        quality: String,
        thumbnail: String,
        placeholderColor: String,
    }
}
</script>

<style>
.vimeo-loader {
    position: absolute;
    inset: 0 0 1px 0;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.vimeo-loader::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, .1);
    /* background-size: cover; */
    transform-origin: top left;
    transform: scaleX(0);

    /* animation-name: loader;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    animation: loader 4s cubic-bezier(1, 0, 0, 1) infinite; */
}

.vimeo-loader.vimeo-loader-animate::after {
    animation-name: loader;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    animation: loader 4s cubic-bezier(1, 0, 0, 1) infinite;
}

@keyframes loader {
    0% {
        transform: scaleX(0);
    }
    50% {
        transform-origin: top left;
        transform: scaleX(1);
    }
    51% {
        transform-origin: bottom right;
    }
    100% {
        transform-origin: bottom right;
        transform: scaleX(0);
    }
}
</style>