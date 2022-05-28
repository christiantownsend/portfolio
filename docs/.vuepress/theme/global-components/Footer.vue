<template>
    <div class="container lighten pad-block-4 gap-1" style="display: flex; justify-content: space-between; align-items: center; font-size: .85em; flex-wrap: wrap; margin-top: auto;">
        <div>Updated {{ this.$themeConfig.lastUpdated }}</div>
        <div>Copyright © {{ new Date().getFullYear() }} Christian Townsend, All Rights Reserved</div>
        <DarkModeToggle />
    </div>
</template>

<script>
import DarkModeToggle from '@theme/components/DarkModeToggle.vue'

export default {
    components: { DarkModeToggle },
}
</script>