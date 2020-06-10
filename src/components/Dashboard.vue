<template>
    <div class="container">
        <div class="columns is-multiline is-mobile">
            <b-icon type="is-success"
                    class="column has-text-centered"
                    pack="fas"
                    size="is-large"
                    :icon="icon"
                    v-for="icon in playerIcons" :key="icon">

            </b-icon>
        </div>

    </div>

</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Dashboard",
        computed: {
            ...mapGetters([
                'players',
            ]),
            playerNamesReady: function () {
                return this.players.filter(p => p.ready).map(p => p.name)
            },
            playerIcons: function () {
                return this.players.filter(p => p.ready).map(p => p.icon)
            }
        },
        data() {
            return {
                disabled: true,
            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        width: 40%;

    }

</style>