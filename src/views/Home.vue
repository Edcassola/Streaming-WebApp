<template>
      <div id="app">
          <header><h1>Welcome to G A R G U S</h1></header>
          <main>
              <section class="player">
                  <h2 class="song-title">{{ current.title }}</h2>
              </section>
          </main>
      </div>
</template>

<script>
export default {
    name: 'app',
    data (){
        return {
            current: {
                title: 'MUSIC TITLE'
            },
            songs: [
                {
                title: 'Stasera',
                artists: 'Ultimo',
                src: './assets/'
                }
            ]
        }
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
}
</style>