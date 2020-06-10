<template>
    <div class="has-text-centered">
        <h1 class="title is-5">Write lie answer for {{currentPlayerName}}'s question</h1>
        <b-message>
            {{questionTextPartOne}}
            <b-tag
                    :closable="false"
                    :rounded="true"
                    type="is-danger">
                {{answer}}
            </b-tag>
            {{questionTextPartTwo}}
        </b-message>
        <b-field
                 type="is-danger">
            <b-input v-model="answer"
                     :disabled="disabled"
                     :has-counter="false"
                     maxlength="25">
            </b-input>
        </b-field>
        <b-button type="is-success is-rounded" v-on:click="sendAnswer" :disabled="disabled">Confirm</b-button>

    </div>

</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "LieAnswer",
        computed: {
            ...mapGetters([
                'currentPlayerId',
                'players',
                'otherQuestion',
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
        methods: {
            sendAnswer: function () {
                const self = this;
                self.$starx.request('game.input', {answer: self.answer}, function (data) {
                    console.log("lie answer");
                    if (data.code === 0) {
                        self.disabled = true
                    }
                });
            },
        },
        data() {
            return {
                answer: '',
                disabled: false
            }
        }
    }
</script>

<style scoped>

</style>