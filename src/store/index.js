import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store  = new Vuex.Store({
  state: {
    // data
    count: 0,
    publications: [
    ] 
 },


getters:{
    getDouble(state ){
        return state.count * 2
    }

},

  mutations: {
    increment(state) {
      //actualizar productos
      state.count++;
    },
    increment10(state, payload = {}) {
        state.count += payload.number || 1
      },
    decrement(state) {
      state.count--;
    },


    sendPublication(state, payload ){
        this.state.publications.push({
            text:payload,
            src:"https://imagenes.universia.net/gc/net/images/ciencia-tecnologia/m/ma/mas/mas-200-cursos-gratis-tecnologia.jpg"
        })
        this.state.publications.reverse();
    },
    deletePublication(state){
        
 
        const index = this.state.publications.indexOf(state);
        confirm("Are you sure you want to delete this item?") &&
        this.state.publications.splice(index, 1);
        
    },
  }
});

export default store
