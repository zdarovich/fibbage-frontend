export default {

  unjoin(st, player) {
    let p = st.players.find(p => p.id === player.id)
    st.players.splice(st.players.indexOf(p), 1);
  },
  setPlayerName(st, player) {
    player.ready = false
    st.players.push(player)
  },
  setPlayerNames(st, players) {
    players.forEach(function (player) {
      player.ready = false
      st.players.push(player)
    });
  },
  setPlayerReady(st, data) {
    let player = st.players.find(p => p.id === data.id)
    let playedIdx = st.players.findIndex(p => p.id === data.id)
    player.ready = true
    if (player) {
      st.players[playedIdx] = player
    }
  },
  setGameState(st, data) {
    if (data.state) {
      st.state = data.state
    }
  },
  setGameStateWaiting(st) {
      st.state = 'WAITING'
  },
  setPlayerCategories(st, data) {
    if (data.categories) {
      st.categories = data.categories
    }
  },
  setPlayerQuestion(st, data) {
    if (data.question) {
      st.question = data.question
    }
  },
  setOtherPlayerQuestion(st, data) {
    if (data.otherQuestion) {
      st.otherQuestion = data.otherQuestion
    }
  },
  setPlayersAnswers(st, data) {
    if (data.answers) {
      st.answers = data.answers
    }
  },
  setPlayersTempScore(st, data) {
    if (data.score) {
      st.tempScore = data.score
    }
  },
  setPlayersTotal(st, data) {
    if (data.total) {
      st.total = data.total
    }
  },
  setPlayersMatrix(st, data) {
    if (data.answerMatrix) {
      st.answerMatrix = data.answerMatrix
    }
  },
  setPlayersJoined(st) {
    console.log("setPlayersJoined")
    st.isJoinedRoom = true
  },
  setCurrentPlayer(st, data) {
    if (data.currentPlayerId) {
      st.currentPlayerId = data.currentPlayerId
    }
  },
  setTicks(st, data) {
    if (data.ticks) {
      st.ticks = data.ticks
    }
  },
  reset(st) {
    st.categories = []
    st.answerMatrix = []
    st.tempScore = []
    st.total = []
    st.answers = []
    st.question = {}
    st.currentPlayerId = ''
  },
  resetReady(st) {
    st.players.forEach(function (player) {
      player.ready = false
    });
  }
}
