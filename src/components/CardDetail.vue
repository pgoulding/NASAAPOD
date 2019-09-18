<template>
  <div class="detail-card">
    <router-link to="/">←Back</router-link>
    <h2>{{card.title}}</h2>
    <p>{{card.date}}</p>
    <img :alt="card.explanation" v-if="card.media_type === 'image'" class="card-image" :src="card.url"/>
    <iframe v-else type="text/html" width="100%" height="240px" :src="card.url"></iframe>
    <p class="photo-description">{{card.explanation}}</p>
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
  
  h2{
    margin-top:10px;
  }

  .detail-card {
  width:90%;
  margin: 30px auto;
  text-align: center;
  height: fit-content;
  border: 1px solid lightgray;
  border-radius:8px;
  padding:20px;
  box-shadow:0px 0px 10px lightgray;
}

.card-image {
  width: 100%;
  object-fit: cover;
}

.photo-description{
  text-align: left;
}

</style>