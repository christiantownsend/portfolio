<template>
    <!-- <header class="project-header container pad-block-3" style="position: fixed; z-index: 10; inset: 0 0 auto 0; display: flex; justify-content: space-between; align-items: center; mix-blend-mode: difference;">
        <div class="span-2" style="color: white;">
            <router-link class="nav-link no-arrow" style="margin-left: 0;" to="/">← Back</router-link>
        </div>
        <div id="logo" style="fill: white">
            <Logo />
        </div>
    </header> -->
    <header class="container pad-block-2 margin-block-end-2" style="position: fixed; inset: 0 0 auto 0; display: flex; justify-content: space-between; z-index: 10; transition: color .5s, background-color .5s; mix-blend-mode: difference; color: white; font-weight: 300;">
            <router-link class="title no-arrow" to="/">Christian Townsend</router-link>
            <nav class="gap-2" style="display: flex;">
                <router-link class="nav-link no-arrow" v-for="item in $themeConfig.nav" :key="item.text" :to="item.url">{{ item.text }}</router-link>
            </nav>
        </div>
    </header>
</template>