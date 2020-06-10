<template>
    <div>
        <b-table
                :data="scoreTable"
                :loading="isLoading"
                :mobile-cards="hasMobileCards">

            <template slot-scope="props">
                <b-table-column label="" >
                    <span>
                        <b-icon pack="fas"
                                size="is-medium"
                                :icon="props.row.icon">
                        </b-icon>
                    </span>
                </b-table-column>
                <b-table-column field="Name" label="Name">
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column field="Score" label="Score">
                    {{ props.row.tempScore }}
                </b-table-column>

            </template>


        </b-table>
        <div class="section">
            <b-taglist v-for="player in players" :key="player" attached>
                <b-tag type="is-danger">
                    {{answerMatrix[player.id].text}}
                </b-tag>
                <b-tag v-for="id in answerMatrix[player.id].pickedIds" :key="id">
                    <b-icon pack="fas"
                            size="is-medium"
                            type="is-danger"
                            :icon="playersIconsMap[id]">
                    </b-icon>

                </b-tag>
            </b-taglist>
            <b-taglist attached>
                <b-tag type="is-success">
                    {{answerMatrix['truth'].text}}
                </b-tag>
                <b-tag v-for="id in answerMatrix['truth'].pickedIds" :key="id">
                    <b-icon pack="fas"
                            size="is-medium"
                            type="is-success"
                            :icon="playersIconsMap[id]">
                    </b-icon>
                </b-tag>
            </b-taglist>
        </div>


    </div>

</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Score",

        computed: {
            ...mapGetters([
                'tempScore',
                'players',
                'answerMatrix',
            ]),
            playerNames: function () {
                return this.players.map(p => p.name)
            },
            playersIconsMap: function () {
                let map = new Map()
                let self = this
                for (let i = 0; i < self.players.length; i++) {
                    map[self.players[i].id] = self.players[i].icon
                }
                return map
            },
            scoreTable: function () {
                let result = [];
                let self = this
                for (let i = 0; i < self.players.length; i++) {
                    result.push({
                        name:self.players[i].name,
                        icon:self.players[i].icon,
                        tempScore:self.tempScore[self.players[i].id],
                    })
                }
                return result;
            },

        },
        data() {


            return {

                isLoading: false,
                hasMobileCards: false,

            }
        }
    }
</script>

<style scoped>
    .container {

    }
</style>