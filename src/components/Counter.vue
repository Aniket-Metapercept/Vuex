<template>
    <h1>Vuex Counter</h1>
    <!-- <h1 class="Counter">{{$store.state.counter}}</h1> -->
    <h1 class="Counter">{{counter}}</h1>
    <button @click="subtoCounter(value)"> - </button>
    <input type="number" v-model="value">
    <button @click="addtoCounter(value)"> + </button>

    <div>
        <button @click="addRandomNumber" class="btn">Add Random Number</button>
    </div>

</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Counter',
  components: {
   
  },
  data(){
      return{
          value:1,
          
      }
  },
  computed:{
      ...mapState(['counter'])
  },
  methods:{
      ...mapMutations(["addtoCounter","subtoCounter"]),
      ...mapActions(["addRandomNumber"])
  
  }
}
</script>

<style scoped>
    .Counter{
        font-size: 5rem;
    }
    button{
        border-radius: 100%;
        border: none;
        width: 2rem;
        height: 2rem;
        font-weight: 700;
        cursor: pointer;
    }
    input{
        padding: 0.4rem;
        margin:0 0.5rem;
        text-align: center;
    }

    .btn{
        border-radius: 0.5rem;
        width: auto;
        background: rgb(151, 177, 113);
        margin-top:1rem ;
        color:white;
        cursor: pointer;
    }
</style>