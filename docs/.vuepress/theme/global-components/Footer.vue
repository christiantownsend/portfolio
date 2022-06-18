<template>
    <div class="footer container lighten gap-1">
        <div>Updated {{ this.$themeConfig.lastUpdated }}</div>
        <div>Copyright © {{ new Date().getFullYear() }} Christian Townsend</div>
        <DarkModeToggle />
    </div>
</template>

<script>
import DarkModeToggle from '@theme/components/DarkModeToggle.vue'

export default {
    components: { DarkModeToggle },
}
</script>

<style>
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .85em;
    flex-wrap: wrap;
    padding-block-start: calc(var(--spacing-unit) * 4);
    padding-block-end: calc(var(--spacing-unit) * 2);
    margin-top: auto;
}
</style>