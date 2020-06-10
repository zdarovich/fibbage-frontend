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
                <b-table-column field="Total" label="Total">
                    {{ props.row.total }}
                    <b-tag v-if="props.row.tempScore !== 0" type="is-success">
                        + {{ props.row.tempScore }}
                    </b-tag>
                </b-table-column>


            </template>


        </b-table>
    </div>

</template>

<script>
    import {mapGetters} from "vuex";
    import orderBy from 'lodash/orderBy'

    export default {
        name: "Finish",

        computed: {
            ...mapGetters([
                'tempScore',
                'total',
                'players',
            ]),
            scoreTable: function () {
                let result = [];
                let self = this
                for (let i = 0; i < self.players.length; i++) {
                    result.push({
                        name:self.players[i].name,
                        icon:self.players[i].icon,
                        tempScore:self.tempScore[self.players[i].id],
                        total:self.total[self.players[i].id],
                    })
                }
                let sortingPriority = [{field:'total', order:'desc'}, {field:'tempScore', order:'desc'}]
                result = orderBy(result, sortingPriority.map(i => i.field), sortingPriority.map(i => i.order))

                return result;
            },

        },
        data() {


            return {

                isLoading: false,
                hasMobileCards: false,
                // players:[
                //     {id:'player1', name:'redax', icon:'beer'},
                //     {id:'player2', name:'alina', icon:'baby'},
                // ],
                // answerMatrix:{
                //     'player1':{text:'cat', pickedIds:['player2']},
                //     'player2':{text:'dog', pickedIds:['']},
                //     'truth':{text:'snake', pickedIds:['player1']},
                // }
            }
        }
    }
</script>

<style scoped>

</style>