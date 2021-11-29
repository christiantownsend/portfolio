<template>
<div>
    <header class="grid">
        <div id="logo" class="span-1 t-span-4">
            <Logo />
        </div>
        <div id="right-content" class="span-3 t-span-4">
            <div>Christian Townsend</div>
            <nav>
                <router-link class="nav-link" to="/">Work</router-link>
                <router-link class="nav-link" to="/info">Info</router-link>
            </nav>
        </div>
    </header>
    <div id="spacer" v-if="spaced">
        <hr>
    </div>
</div>
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
header {
    z-index: 100;
    mix-blend-mode: difference;
    /* color: white; */

    position: fixed;
    width: 100%;
    padding: 0 8%;
    height: var(--header-height);

    place-items: center start;

    pointer-events: none;
}

header #right-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.nav-link {
    opacity: .6;
    margin-left: 2rem;

    pointer-events: initial;
}

#logo {
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    animation: rotate 12s linear infinite;
}

.cls-1{
    fill:var(--main-color);
}

#spacer {
    height: var(--header-height);
    width: 100%;
    padding: 0 8%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@media only screen and (max-width: 1000px) {
    header:not(.project-header) {
        position: relative;
        height: auto;
        padding-top: calc(var(--vertical-spacing)*3);
        padding-bottom: calc(var(--vertical-spacing)*3);
    }

    #logo:not(.project-logo) {
        margin-bottom: calc(var(--vertical-spacing)*3);
    }

    #spacer {
        height: auto;
    }
}
</style>