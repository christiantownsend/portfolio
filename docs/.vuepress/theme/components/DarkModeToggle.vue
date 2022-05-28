<template>
<button class="dark-mode-toggle" @click="darkMode = !darkMode" :class="{active: darkMode}" name="dark-mode-toggle">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">
        <g id="dark-mode-icon" data-name="Layer 2">
            <g id="dark-mode-icon" data-name="Layer 1">
            <path d="M19.5,0A19.5,19.5,0,1,0,39,19.5,19.53,19.53,0,0,0,19.5,0Zm0,35V4a15.5,15.5,0,0,1,0,31Z"/>
            </g>
        </g>
    </svg>
</button>
</template>

<script>
export default {
    data() {
        return {
            darkMode: null,
        }
    },
    mounted() {
        this.darkMode = JSON.parse(localStorage.getItem('dark-mode'));
    },
    watch: {
        darkMode(newDarkMode) {
            localStorage.setItem('dark-mode', newDarkMode);
            document.documentElement.classList = newDarkMode ? 'dark' : '';
        }
    }
}
</script>

<style>
.dark-mode-toggle {
    display: block;
    height: 1.5em;
    width: 1.5em;
    background: none;
    outline: none;
    border: none;
    padding: 0;
    fill: var(--color-neutral-100);
    cursor: pointer;
    transform: rotate(45deg);
    transition: transform .4s var(--default-timing)
}

.dark-mode-toggle.active {
    transform: rotate(225deg);
}
#dark-mode-icon {
    fill: inherit;
}
</style>