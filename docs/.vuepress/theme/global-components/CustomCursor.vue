<template>
<div id="custom-cursor"></div>
</template>

<script>
export default {
    data() {
        return {
            delay: 4,
            ease: 20,
            scale: 1,
            easedScale: 1,
            mousePos: {
                x: 0,
                y: 0,
            },
            revisedMousePos: {
                x: 0,
                y: 0,
            },
            prevScale: 1
        }
    },
    mounted() {
        document.addEventListener('mousemove', this.mouseMove)
        document.addEventListener('mousedown', () => {
            this.prevScale = this.scale
            this.scale = .4
        })
        document.addEventListener('mouseup', () => {
            this.scale = this.prevScale
        })
        this.animate()
    },
    methods: {
        mouseMove(e) {
            // this.mousePos = {x: e.pageX, y: e.pageY}
            this.mousePos = {x: e.clientX, y: e.clientY}

            if (!e.target.closest) {
                return;
            }

            if (e.target.nodeName.toLowerCase() == 'a' || e.target.closest('button') != null || e.target.closest('.project-row') != null) {
                this.delay = 12
                this.scale = .6

                this.$el.style.setProperty('background-color', 'white')
            }
            else {
                this.delay = 4
                this.scale = 1

                this.$el.style.setProperty('background-color', 'transparent')
            }
            // console.log(e);
        },
        animate() {
            requestAnimationFrame(this.animate);

            this.easedScale += (this.scale - this.easedScale) / this.ease;

            this.revisedMousePos.x += (this.mousePos.x - this.revisedMousePos.x) / this.delay;
            this.revisedMousePos.y += (this.mousePos.y - this.revisedMousePos.y) / this.delay;


            this.$el.style.transform = `translate(${this.revisedMousePos.x}px, ${this.revisedMousePos.y}px) scale(${this.easedScale})`;
        }
    }
}
</script>

<style scoped>
#custom-cursor {
    --size: 60px;

    position: fixed;
    z-index: 10000;
    width: var(--size);
    height: var(--size);
    margin: calc(var(--size) * -.5) 0 0 calc(var(--size) * -.5);
    border: 1px solid white;
    background-color: transparent;
    /* background: white; */
    mix-blend-mode: difference;
    border-radius: 50%;
    pointer-events: none;
    will-change: transform;

    transition: background-color .2s ease-in-out;
}

@media (hover: none) {
    #custom-cursor {
        display: none;
    }
}
</style>