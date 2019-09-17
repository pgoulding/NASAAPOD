<template>
  <div id="app">
    <Header/>
    <Planets v-bind:planetData="planetData"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Planets from './components/Planets'
import fetchPlanetData from './nasaFetch'

export default {
  name: 'app',
  components: {
    Header,
    Planets
  }, 
  data() {
    return {
      planetData:[]
    }
  },
  async created() {
    this.planetData = await fetchPlanetData()
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
