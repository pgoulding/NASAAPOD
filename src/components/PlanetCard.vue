<template>
  <div class="planet-card">
    <p>{{planet.title}}</p>
      <img :alt="planet.explanation" v-if="planet.media_type === 'image'" class="planet-image" :src="planet.url"/>
      <iframe v-else type="text/html" width="100%" height="240px" :src="planet.url"></iframe>
  </div>
</template>

<script>
export default {
  name: "PlanetCard",
  props:["planet"]
}
</script>

<style scoped>
.planet-card {
  text-align: center;
  height: fit-content;
}

p {
  background: #f4f4f4;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.planet-image{
    height: 240px;
    width: 100%;
    box-sizing: border-box;
    object-fit: cover;
}

</style>