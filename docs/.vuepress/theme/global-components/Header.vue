<template>
    <header class="header-outer container">
        <div class=" header-inner">
            <router-link id="logo" to="/" class="no-arrow">
                <Logo />
            </router-link>
            <div class="title">Christian Townsend</div>
            <nav>
                <router-link class="nav-link" v-for="item in $themeConfig.nav" :key="item.text" :to="item.url">{{ item.text }}</router-link>
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

</style>