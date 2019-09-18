<template>
  <div id="home">
    <Form />
    <Planets v-if="!this.isLoading" v-bind:planetData="planetData"/>
    <div id="loading" v-else>
    <h3>Loading please wait...</h3>
    <!-- <img src="../assets/loading.gif" alt="loading page spinner" /> -->
    </div>
  </div>
</template>

<script>
import Planets from './Planets'
import { fetchPlanetData } from '../nasaFetch'
import Form from './Form'

export default {
  name: 'Home',
  components: {
    Planets,
    Form
  }, 
  data() {
    return {
      planetData:[],
      isLoading:true
    }
  },
  async created() {
    this.planetData = await fetchPlanetData()
    this.isLoading = !this.isLoading
  }
}
</script>

<style>
#home {
  background: #f4f4f4;
  min-height: 100vh;
}
#loading {
  text-align: center;
  margin: 40px;
}
</style>