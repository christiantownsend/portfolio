<template>
    <div class="video-container" :data-tag="tag" :data-tag-pos="tagPos ? tagPos : randomTagPos" :style="`--rotation: ${tagRotation ? tagRotation : randomTagRot}`">
        <video autoplay muted loop playsinline :class="`video ${side} ${loaded ? 'loaded' : ''} ${cover ? 'cover' : ''}`" @loadeddata="loaded = true">
            <source :src="src"/>
        </video>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loaded: false,
            randomTagPos: ['top-left', 'top-right', 'bottom-left', 'bottom-right'][Math.floor(Math.random() * 4)],
            randomTagRot: Math.floor(Math.random() * 50) - 25 + 'deg',
        }
    },
    props: {
        src: String,
        side: String,
        tag: String,
        tagPos: String,
        tagRotation: String,
        cover: Boolean
    },
}
</script>

<style>
.video.cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.video.right {
    transform: translateX(8rem);
    clip-path: inset(0 0 0 100%);
}
.video.left {
    transform: translateX(-8rem);
    clip-path: inset(0 100% 0 0);
}
.video.top {
    transform: translateY(-8rem);
    clip-path: inset(0 0 100%  0);
}
.video.bottom {
    transform: translateY(8rem);
    clip-path: inset(100% 0 0 0);
}

.video.loaded {
    transition: all 2s cubic-bezier(.6,0,0,1);
    transform: translateY(0);
    clip-path: inset(0 0 0 0);
}
</style>