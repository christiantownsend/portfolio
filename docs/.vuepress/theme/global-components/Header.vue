<template>
    <!-- <header class="header-outer container">
        <div class=" header-inner">
            <router-link id="logo" to="/" class="no-arrow">
                <Logo />
            </router-link>
            <div class="title">Christian Townsend</div>
            <nav>
                <router-link class="nav-link" v-for="item in $themeConfig.nav" :key="item.text" :to="item.url">{{ item.text }}</router-link>
            </nav>
        </div>
    </header> -->
    <header class="container pad-block-2 margin-block-end-2" style="position: sticky; top: 0; display: flex; justify-content: space-between; background: var(--color-neutral-900); z-index: 10; transition: color .5s, background-color .5s;">
            <router-link class="title no-arrow" to="/">Christian Townsend</router-link>
            <nav class="gap-2" style="display: flex;">
                <router-link class="nav-link no-arrow" v-for="item in $themeConfig.nav" :key="item.text" :to="item.url">{{ item.text }}</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
// import Logo from '@theme/components/Logo.vue'

export default {
    // components: { Logo },
}
</script>

<style>
.nav-link {
    opacity: var(--lightened-opacity);
}

nav .router-link-exact-active {
    opacity: 1;
}
</style>