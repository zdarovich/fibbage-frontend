<template>
    <div class="">
        <h1 class="title is-5">Find truth answer for {{currentPlayerName}}'s question</h1>
        <b-message>
            {{questionTextPartOne}}
            <b-tag
                    :closable="false"
                    :rounded="true">
                {{placeholder}}
            </b-tag>
            {{questionTextPartTwo}}
        </b-message>
        <div class="columns is-multiline is-mobile">
            <div class="column has-text-centered" v-for="(answer, index) in answers" v-bind:key="index">
                <b-button :disabled="disabled" type="is-primary is-rounded" v-on:click="sendAnswerOption(index)">{{answer}}</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ChooseTruth",
        computed: {
            ...mapGetters([
                'answers',
                'otherQuestion',
                'players',
                'currentPlayerId',
            ]),
            currentPlayerName: function () {
                return this.players.find(p => p.id === this.currentPlayerId).name
            },
            questionTextPartOne: function () {
                return this.otherQuestion.question.split('______')[0]
            },
            questionTextPartTwo: function () {
                return this.otherQuestion.question.split('______')[1].split('.').join("");
            },

        },
        mounted: function () {
            let currentPlayer = this.players.find(p => p.id === this.currentPlayerId)
            if (currentPlayer.isPlayer) {
                this.disabled = true
            }
        },
        methods: {
            sendAnswerOption: function (answerId) {
                const self = this;
                self.$starx.request('game.input', {answerId:answerId}, function (data) {
                    if (data.code === 0) {
                        self.disabled = true
                        self.$store.commit('reset')
                    }
                });
            },
        },
        data() {
            return {
                placeholder:'_________',
                disabled:false,
            }
        },
    }
</script>

<style scoped>

</style>