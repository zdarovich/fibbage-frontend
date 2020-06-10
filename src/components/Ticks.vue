<template>
    <div>

        <b-progress :value="current" type="is-primary"></b-progress>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Ticks",
        computed: {
            ...mapGetters([
                'ticks',
            ]),

        },
        mounted() {
            setInterval(this.onInterval, this.interval * 1000)
        },
        methods: {
            onInterval() {
                const interval = 100 / this.ticks
                this.current = this.current += interval
                if (this.current >= 100) {
                    clearInterval(this.timerInterval)
                    this.current = 0
                }
            }
        },
        data: function() {
            return {
                current:0,
                interval:1,
                timerInterval: null
            }
        },
    }
</script>

<style scoped>

</style>