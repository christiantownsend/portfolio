<template>
<header class="header-outer container">
    <div class=" header-inner">
        <div id="logo">
            <Logo />
        </div>
        <div class="title">Christian Townsend</div>
        <nav>
            <router-link class="nav-link" v-for="item in $themeConfig.nav" :key="item.text" :to="item.url">{{ item.text }}</router-link>
        </nav>
    </div>
</header>
</template>

<script>
import Logo from '@theme/components/Logo.vue'

export default {
    components: { Logo },
}
</script>

<style>

</style>