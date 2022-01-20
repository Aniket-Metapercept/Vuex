import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'

const Store = createStore({
    state(){
        return {
            counter:0,
            history: [0]
        }
    },
    mutations:{
        addtoCounter(state,payload){
            state.counter = state.counter + payload
            state.history.push(state.counter)
        },
        subtoCounter(state,payload){
            state.counter = state.counter - payload
            state.history.push(state.counter)
        },
    },
    actions:{
        async addRandomNumber(context) {
            let data = await axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new')
            context.commit("addtoCounter",data.data)
        
        }
    },
    getters: {
        activeIndex: (state) => (payload) => {
            let indexes = [];
            state.history.forEach((number, index) => {
                if(number === payload) {
                    indexes.push(index)
                }
            });
            return indexes
        }
    }
})

createApp(App).use(Store).mount('#app')
