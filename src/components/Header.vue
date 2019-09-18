<template>
  <header >
    <router-link to="/">
      <h1>NASA Pic of the Day</h1>
    </router-link>
  </header>
</template>

<script>
export default {
  name:"Header"
}
</script>

<style scoped>
  header{
    background: #333;
    color:#fff;
    text-align: center;
    padding:10px;
  }

  header a {
    color:#fff;
    padding-right: 5px;
  }

</style>