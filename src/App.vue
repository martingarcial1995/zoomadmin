<template>
  <v-app>
    <v-content>
      <Navigator />

      <router-view></router-view>
      <h2>contador</h2>
      <p>{{ count }} - {{stateString}}</p>
      <p>{{double}}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="increment10">lol</button>


    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations }  from 'vuex'
import Navigator from "./components/Navigator";

export default {
  name: "App",
    data () {
      return{
        test:'test'

      }
  },

  components: {
    Navigator
  },
  computed: {
       /* count() {
      return this.$store.state.count;
    }*/

    ...mapState(['count']),

    stateString(){
    return this.test
    },

    double(){
      return this.$store.getters.getDouble

    }

    },
    methods:{
      ...mapMutations(['increment','decrement']),

    /*  increment(){
        this.$store.commit('increment')
      },*/
    /*    decrement(){
        this.$store.commit('decrement')
      },*/
      increment10(){
        this.$store.commit('increment10',{
          number:10
        })
      },
      
    }

};
</script>
