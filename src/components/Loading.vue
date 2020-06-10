<template>
    <div id="boxes">
        <div class="box red"></div>
        <div class="box blue"></div>
        <div class="box green"></div>
        <div class="box cyan"></div>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        mounted() {
            this.randomValues()
        },
        methods: {
            randomValues: function () {
                let self = this
                self.$anime({
                    targets: '#boxes .box',
                    translateY: [
                        {value: 200, duration: 500},
                        {value:0, duration: 800}
                    ],
                    rotate: {
                        value: '1turn',
                    },
                    borderRadius: 50,
                    direction: 'alternate',
                    easing: 'easeInOutQuad',
                    loop: true,
                    elasticity: 200

                });
            }
        }
    }
</script>

<style scoped lang="scss">

    .red {background-color: #8c67ef;}
    .blue {background-color: #ff3860;}
    .green {background-color: #23d160;}
    .cyan {background-color: #363636;}
    #boxes {

        text-align: center;
    }
    .box {
        position: relative;
        width: 1rem;
        height: 1rem;
        margin: 4px;
        display: inline-block;
    }
</style>