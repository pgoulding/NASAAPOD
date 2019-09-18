<template>
  <form class="input-date-form">
    <p>Search By Date: </p>
    <input 
      placeholder="Search by Date"
      type="date"
      v-model="date"
      name="date"
      />
    <input
      type="submit"
      value="Submit"
    />
  </form>
</template>

<script>
export default {
  name:"Form",
  data() {
    return {
      date:''
    }
  }, 
  methods:{
    rearrangeDate() {
      console.log(this.date)
    }
  }
}
</script>

<style scoped>
  .input-date-form{
    display: flex;
    flex-direction: row;
    justify-content:center;
    padding:10px 40px;
    background: #f4f4f4;
  }

  p{
    margin-right:5px;
  }

  input[type="submit"] {
    outline:none;
    border: none;
    width:50px;
    background-color:slategrey;
    margin-left:-2px;
    border-radius: 0 2px 2px 0;
  }

  input[type="date"] {
    border-radius: 0;
    border-color: slategrey;
    border-right:none;
  }

</style>