<template>
<header class="header-outer container">
    <div class=" header-inner">
        <div id="logo">
            <Logo />
        </div>
        <div class="title">Christian Townsend</div>
        <nav>
            <router-link class="nav-link" to="/">Work</router-link>
            <router-link class="nav-link" to="/info">Info</router-link>
        </nav>
    </div>
</header>
</template>

<script>
import Logo from '@theme/components/Logo.vue'

export default {
    components: { Logo },
    props: {
        spaced: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>

</style>