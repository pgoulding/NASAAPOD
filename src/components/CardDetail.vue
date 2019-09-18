<template>
  <div class="detail-card">
    <h2>{{card.title}}</h2>
    <p>{{card.date}}</p>
    <img :alt="card.explanation" v-if="card.media_type === 'image'" class="card-image" :src="card.url"/>
    <iframe v-else type="text/html" width="100%" height="240px" :src="card.url"></iframe>
    <p>{{card.explanation}}</p>
  </div>
</template>

<script>
import { planetDataOnDate } from '../nasaFetch'

export default {
  name:'CardDetail',
  data () {
    return  {
      date:this.$route.params,
      card:{}
    }
  },
  async created () {
    this.card = await planetDataOnDate(this.date.id)
  }
}
</script>

<style scoped>
  .detail-card {
    width:90%;
    margin: 30px auto;
  }
</style>