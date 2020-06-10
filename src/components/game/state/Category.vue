<template>
    <div class="columns is-multiline is-mobile">
        <div class="column has-text-centered" v-for="(category, index) in categories" v-bind:key="index">
            <b-button :disabled="disabled" type="is-primary is-rounded" v-on:click="sendCategory(index)">{{category}}</b-button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Category",
        computed: {
            ...mapGetters([
                'categories',
            ]),

        },
        data() {
          return {
              disabled: false
          }
        },
        methods: {
            sendCategory: function (categoryId) {
                const self = this;
                self.$starx.request('game.input', {categoryId:categoryId}, function (data) {
                    if (data.code === 0) {
                        console.log("category chosen");
                        self.disabled = true
                    }
                });
            },
        }
    }
</script>

<style scoped>

</style>