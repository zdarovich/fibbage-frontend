<template>
    <div class="container">
<!--            TODO steps bar -->
        <div v-if="state === 'ONE'">
            <One/>
        </div>
        <div v-if="state === 'INPUT_CATEGORY'">
            <Category/>
        </div>
        <div v-if="state === 'SHOWING_CHOICE'">
            <ShowQuestion/>
        </div>
        <div v-if="state === 'TWO'">
            <Two/>
        </div>
        <div v-if="state === 'INPUT_LIE_TEXT'">
            <LieAnswer/>
        </div>
        <div v-if="state === 'THREE'">
            <Three/>
        </div>
        <div v-if="state === 'INPUT_TRUE_OPTION'">
            <ChooseTruth/>
        </div>
        <div v-if="state === 'SCORE'">
            <Score/>
        </div>
        <div v-if="state === 'FINISH'">
            <Finish/>
        </div>
    </div>
</template>

<script>
    import Category from "@/components/game/state/Category";
    import ShowQuestion from "@/components/game/state/ShowQuestion";
    import One from "@/components/game/state/One";
    import Two from "@/components/game/state/Two";
    import LieAnswer from "@/components/game/state/LieAnswer";
    import Three from "@/components/game/state/Three";
    import {mapGetters} from "vuex";
    import ChooseTruth from "@/components/game/state/ChooseTruth";
    import Score from "@/components/game/state/Score";
    import Finish from "@/components/game/state/Finish";
    export default {
        name: "Board",
        components: {Finish, Score, ChooseTruth, Three, LieAnswer, One, ShowQuestion, Category, Two},
        computed: {
            ...mapGetters([
                'state',
            ]),
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>