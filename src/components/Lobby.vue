<template>
    <div class="main">
        <div class="main-content">
            <Ticks v-if="isTicks"/>
            <div class="section">
                <div class="container" style="width: 80%">
                    <div v-if="state === 'WAITING'">
                        <Room v-if="isJoinedRoom"/>
                        <Create v-else/>
                    </div>
                    <div v-if="state === 'STARTING'">
                        <Loading/>
                    </div>
                    <div v-else>
                        <Board/>
                    </div>
                </div>
            </div>
        </div>
        <Dashboard v-if="isDashboard"/>
    </div>
</template>

<script>

  import Room from "@/components/room/Room";
  import {mapGetters} from "vuex";
  import Loading from "@/components/Loading";
  import Create from "@/components/room/Create";
  import Board from "@/components/game/Board";
  import Dashboard from "@/components/Dashboard";
  import Ticks from "@/components/Ticks";
  export default {
  name: 'Lobby',
      components: {Ticks, Dashboard, Board, Create, Loading, Room},
      data: function() {
          return {
              isDashboard:false,
              isTicks:false,
          }
        },
      watch: {
        state: function() {
            if (this.state === 'RESET') {
                this.$store.commit('reset')
                this.$store.commit('setGameStateWaiting')
            } else if (
                this.state === 'INPUT_CATEGORY' ||
                this.state === 'INPUT_LIE_TEXT' ||
                this.state === 'INPUT_TRUE_OPTION'
            ) {
                this.isDashboard = true
                this.isTicks = true

            } else {
                this.isDashboard = false
                this.isTicks = false
                this.$store.commit('resetReady')

            }

        },
      },
      computed: {
          ...mapGetters([
              'state',
              'isJoinedRoom',
          ]),

      },
  methods: {
    confirm: function () {
      const self = this;
        self.$starx.request('room.join', {nickname: this.nickname}, function (data) {
          if (data.code === 0) {
              console.log("player joined")
              self.isPlayerJoined = true
          }
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .main {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    .main-content {
        flex: 1;
    }

</style>
