<template>
    <div class="has-text-centered">

        <b-field label="Name">
            <b-input v-model="nickname"></b-input>
        </b-field>
        <b-button type="is-success is-rounded" v-on:click="confirm">Create player</b-button>
    </div>
</template>

<script>
    export default {
        name: "Create",
        data: function() {
            return {
                nickname: "",
            }
        },
        methods: {
            confirm: function () {
                const self = this;
                self.$starx.request('game.join', {nickname: this.nickname}, function (data) {
                    if (data.code === 0) {
                        console.log("player joined")
                        self.$store.commit('setPlayersJoined')
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .container {

    }
</style>