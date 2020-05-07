<template>
      <div id="app">
          <header><h1>Welcome to G A R G U S</h1></header>
          <main>
              <section class="player">
                  <h2 class="song-title">{{ current.title }} - <span>{{ current.title }}</span></h2>
                  <div class="contro">
                      <button class="prev">A Seguir</button>
                      <button class="play" v-if="!isPlaying">Play</button>
                      <button class="pause" v-else>Pause</button>
                      <button class="next">Next</button>
                  </div>
              </section>
          </main>
      </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            current: {},
            index: 0,
            songs: [
                {
                    title: 'Motherless',
                    artist: 'J.Cole',
                    src: require('../assets/img/projota.mp3')
                }
            ],
            player: new Audio()
        }
    },

    created () {
        this.current = this.songs[this.index];
        this.player.src = this.current.src;
    }
}

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: sens-serif;
}

header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: #212121;
    color: #fff;
}
</style>