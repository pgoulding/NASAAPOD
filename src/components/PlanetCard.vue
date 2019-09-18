<template>
  <div class="planet-card">
    <router-link v-bind:to="'/APOD/'+ planet.date"><h3>{{planet.title}}</h3></router-link>
      <img :alt="planet.explanation" v-if="planet.media_type === 'image'" class="planet-image" :src="planet.url"/>
      <iframe v-else type="text/html" width="100%" height="240px" :src="planet.url"></iframe>
      <p>{{planet.date}}</p>
  </div>
</template>

<script>
export default {
  name: "PlanetCard",
  props:["planet"]
}
</script>

<style scoped>
h3 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.planet-card {
  text-align: center;
  height: fit-content;
  border: 1px solid lightgray;
  border-radius:8px;
  padding:10px;
  box-shadow:0px 0px 10px lightgray;
}

.planet-card:hover{
  box-shadow:0px 0px 10px darkgray;
  cursor: pointer;
}

.planet-image{
    height: 240px;
    width: 100%;
    box-sizing: border-box;
    object-fit: cover;
}

</style>