<template>
      <div id="app">
          <main>
              <div class="top-icons">
                  <section class="logo">
                      <a href="#">
                      <img class="logo" src="../assets/img/gargus.png"></a>
                  </section>
                  <section class="side-top-icons">
                  <img class="side" src="../assets/img/cars.png">
                  <img class="side" src="../assets/img/search.png">
                  <img class="side" src="../assets/img/bars.png">
                  </section>
              </div>
              <div class="center-content">
                  <section class="side-bar"></section>
                  <section class="purple-circle"></section>
              </div>
              <!-- <img src="../assets/img/Ellipse1.png" class="linha"> -->
              <!-- <img src="../assets/img/Ellipse.png" class="ellipse"> -->
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



#app{
    background-color: rgba(118, 111, 140, 0.442);
}

.top-icons {
    display: flex;
    justify-content: space-between;
}

.logo {
    width: 7em;
    padding: 2.2em;
}

.side{
    margin: 5em 12px;
    padding: 0 12px;
    width: 1.2em;
}

.side-top-icons {
    padding: 1em;
}

/* .linha {
    position: fixed;
    z-index: 0;
    width: auto;
    height: 67vh;
    z-index: 12;
} */

/* DESKTOP */
/* @media screen and (min-width: 900px) {
    .ellipse {
    background-size: cover;
    padding-top: 0;
    width: auto;
    height: 87vh;
    z-index: 12;
    }


} */

/* PHONE */

@media screen and (max-width: 899px){
.ellipse {
    display: none;
    }
}

</style>