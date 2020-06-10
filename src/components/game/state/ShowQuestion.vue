<template>
    <div>
        <h1 class="title is-5 has-text-centered">Your question and truth answer</h1>
        <b-message>
            {{questionTextPartOne}}
            <b-tag
                    :closable="false"
                    :rounded="true"
                    type="is-success">
                {{answer}}
            </b-tag>
            {{questionTextPartTwo}}

        </b-message>
    </div>

</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ShowQuestion",
        components:{},
        computed: {

            ...mapGetters([
                'question',
            ]),
            questionTextPartOne: function () {
                return this.question.question.split('______')[0]
            },
            questionTextPartTwo: function () {
                return this.question.question.split('______')[1].split('.').join("");
            },
            answer: function () {
                return this.question.answer
            }
        },
        data() {
            return {
            }
        },
        methods: {
            sendCategory: function (categoryId) {
                const self = this;
                self.$starx.request('game.input', {categoryId:categoryId}, function (data) {
                    if (data.code === 0) {
                        console.log("category chosen");
                    }
                });
            },
        }
    }
</script>

<style scoped>

</style>