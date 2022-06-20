<template>
    <div class="video-container" :data-tag="tag" :data-tag-pos="tagPos ? tagPos : randomTagPos" :style="`--rotation: ${tagRotation ? tagRotation : randomTagRot}`">
        <img :src="src">
    </div>
</template>

<script>
export default {
    data() {
        return {
            randomTagPos: ['top-left', 'top-right', 'bottom-left', 'bottom-right'][Math.floor(Math.random() * 4)],
            randomTagRot: Math.floor(Math.random() * 50) - 25 + 'deg',
        }
    },
    props: {
        src: String,
        tag: String,
        tagPos: String,
        tagRotation: String
    },
}
</script>

<style>

</style>