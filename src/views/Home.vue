<template>
      <div id="app">
          <header><h1>Welcome to G A R G U S</h1></header>
          <main>
              <section class="player">
                  <h2 class="song-title">{{ current.title }} - <span>{{ current.artist }}</span></h2>
                  <div class="contro">
                      <button class="prev" @click="prev">prev</button>
                      <button class="play" v-if="!isPlaying" @click="play">Play</button>
                      <button class="pause" v-else @click="pause">Pause</button>
                      <button class="next" @click="next">Next</button>
                  </div>
              </section>
              <section class="playlist">
                  <h3>The Playlist</h3>
                  <button v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
                  {{ song.title }} - {{ song.artist }} </button>
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
            isPlaying: false,
            songs: [
                {
                    title: 'Dior',
                    artist: 'Pop Smoke',
                    src: require('../assets/music/POP SMOKE - DIOR.mp3')
                },
                {
                    title: 'Revenge',
                    artist: 'Joyner Lucas',
                    src: require('../assets/music/Joyner Lucas - Revenge.mp3')
                }
            ],
            player: new Audio()
        }
    },
    methods: {
        play (song) {
            if (typeof song.src != "undefined") {
                this.current = song;

                this.player.src = this.current.src;
            }

            this.player.play();
            this.isPlaying = true;
        },
        pause () {
            this.player.pause();
            this.isPlaying = false;
        },
        next () {
            this.index++;
            if (this.index > this.songs.lenght -1) {
                this.index = 0;
            }

            this.current = this.songs[this.index];
            this.play(this.current)
        },
        prev () {
            this.index--;
            if (this.index < 0) {
                this.index = this.songs.lenght - 1;
            }

            this.current = this.songs[this.index];
            this.play(this.current);
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
    background-color: #6c63ff;
    color: #fff;
}
</style>