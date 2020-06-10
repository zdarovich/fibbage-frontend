<template>
    <Lobby />
</template>

<script>
import Lobby from './components/Lobby.vue'

export default {
  name: 'App',
  components: {
    Lobby,
  },
}
</script>

<style>
    html, body {
        min-height: 100%;
        min-width: 100%;
        margin:0;
        padding:0;
    }
</style>
