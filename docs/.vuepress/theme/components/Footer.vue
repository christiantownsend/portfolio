<template>
<div>
    <div class="container lighten pad-block-4 gap-1" style="display: flex; justify-content: space-between; align-items: center; font-size: .85em; flex-wrap: wrap;">
        <div>Updated {{ lastUpdated }}</div>
        <div>Copyright © {{ new Date().getFullYear() }} Christian Townsend, All Rights Reserved</div>
        <DarkModeToggle />
    </div>
</div>
</template>

<script>
import DarkModeToggle from '@theme/components/DarkModeToggle.vue'

export default {
    components: { DarkModeToggle },
    data() {
        return {
            lastUpdated: '',
        }
    },
    mounted() {

        let updatedList = [];
        this.$site.pages.forEach(page => {
            let update = page.lastUpdated.split(',')[0].split('/').reverse().join('/');
            updatedList.push(update);
        })

        let lastUpdate = updatedList.sort((a, b) => (a < b) ? 1 : -1)[0].split('/');

        const date = new Date();
        date.setFullYear(lastUpdate[0]);
        date.setDate(lastUpdate[1]);
        date.setMonth(lastUpdate[2]-1);

        this.lastUpdated = date.toLocaleString('en-US', {month: 'long', year: 'numeric'});
    },
}
</script>

<style>
</style>