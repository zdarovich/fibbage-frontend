<template>

    <div class="has-text-centered">
        <article class="message is-primary">
            <b-table
                    :data="players"
                    :mobile-cards="false">
                <template slot-scope="props">
                    <b-table-column label="" >
                    <span>
                        <b-icon pack="fas"
                                size="is-small"
                                :icon="props.row.icon">
                        </b-icon>
                    </span>
                    </b-table-column>
                    <b-table-column label="Waiting for players">
                        {{ props.row.name }}
                    </b-table-column>
                </template>


            </b-table>
        </article>
        <b-button type="is-success is-rounded" v-on:click="start">Start game</b-button>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "Room",
        computed: {
            ...mapGetters([
                'players',
            ]),
              playerNames: function () {
                    return this.players.map(p => p.name)
              }
        },
        methods: {
            start: function () {
                const self = this;
                self.$starx.request('game.start', {}, function (data) {
                    if (data.code === 0) {
                        console.log("player joined")
                        self.isPlayerJoined = true
                    }
                });
            }
        },
        data: function() {
        return {
            nickname: "",
            hasName: false,
            isNameValid: false,
        };
},
    }
</script>

<style scoped>

</style>