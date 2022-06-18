<template>
    <video autoplay muted loop playsinline :class="`video-load ${side} ${loaded ? 'loaded' : ''}`" @loadeddata="loaded = true">
        <source :src="src"/>
    </video>
</template>

<script>
export default {
    data() {
        return {
            loaded: false,
        }
    },
    props: {
        src: String,
        side: String
    },
}
</script>

<style>
.video-load, .video-load.right {
    transform: translateX(8rem);
    clip-path: inset(0 0 0 100%);
}
.video-load.left {
    transform: translateX(-8rem);
    clip-path: inset(0 100% 0 0);
}
.video-load.top {
    transform: translateY(-8rem);
    clip-path: inset(0 0 100%  0);
}
.video-load.bottom {
    transform: translateY(8rem);
    clip-path: inset(100% 0 0 0);
}

.video-load.loaded {
    transition: all 2s cubic-bezier(.6,0,0,1);
    transform: translateY(0);
    clip-path: inset(0 0 0 0);
}
</style>