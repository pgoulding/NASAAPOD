<template>
  <section class="container">
    <div v-bind:key="planet.id" v-for="planet in planetData">
      <PlanetCard v-bind:planet="planet"/>
    </div>
  </section>
</template>

<script>
import PlanetCard from './PlanetCard'

export default {
  name: "Planets",
  components:{
    PlanetCard
  },
  props: ["planetData"]
}
</script>

<style scoped>
.container {  
    display: grid;  
    grid-gap: 10px;  
    background: #f4f4f4;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    /* grid-template-rows: 260px; */
    padding:5px;
}
/* .container > div > img {  
    width: 100%;  
    height: 100%;  
    object-fit: cover;  
} */
</style>