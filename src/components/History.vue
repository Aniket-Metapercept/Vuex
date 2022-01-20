<template>
<div class="container">
    <h1>History</h1>
    <div class="flex">
        <p v-for="(number , index) in history" :key="index">{{number}}</p>
    </div>

    
</div>

</template>

<script>

import {mapState, } from 'vuex' 
export default {
  name: 'History',
  components: {
   
  },
  data(){ 
      return{
          value : 0
      }
  },
  computed:{
      ...mapState(['history']),
      
  }
}
</script>

<style scoped>
    .container{
        margin-top: 7rem;
    }
    .flex{
        display: flex;
        text-align: center;
        width: 25rem;
        margin: 0 auto;
        justify-content: center;
        flex-wrap: wrap;
    }

    p{
        margin:1rem;
    }

</style>