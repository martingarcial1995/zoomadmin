<template>
  <div class="publication__box">
    <div class="publication__box--name">Nombre de administrador</div>
    <div class="publication__box--text">
       <p>{{ publication.text }}</p>
    </div>
    <div class="publication__box--image">
      <img
        src="https://imagenes.universia.net/gc/net/images/ciencia-tecnologia/m/ma/mas/mas-200-cursos-gratis-tecnologia.jpg"
        alt
      />
    </div>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <div class="buttons">
          <div class="btn edit" v-on="on">Editar</div>
          <div class="btn delete" dark @click="deletePublication">Eliminar</div>
        </div>
      </template>

      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-textarea v-model="publication.text" label="Info"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: {
    publication: { required: true, type: Object }
  },
  data() {
    return {
      dialog: false
    };
  },
    computed: {
    ...mapState(["publications"])
  },

  mounted() {},
  methods: {
    deletePublication(){
      this.$store.commit('deletePublication');
    }

    
  }
};
</script>

<style>
.publication__box {
  width: 95%;
  min-height: 200px;
  height: auto;
  border: 0.1px #9b9b9b solid;
  margin: 10px auto 20px auto;
  background-color: #fff;
  padding: 15px;
}
.publication__box--text {
  margin-top: 15px;
}
.publication__box--image {
  width: 100%;
  overflow: hidden;
  margin-top: 15px;
}
.publication__box--image img {
  width: 100%;
  height: 100%;
}
.buttons {
  width: 100%;
  justify-content: flex-end;
  display: flex;
}
.btn {
  width: 100px;
  height: 30px;
  margin: 5px 0 0 15px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  padding: 3px;
  cursor: pointer;
}
.delete {
  background-color: #c01818;
}
.edit {
  background-color: #747d87;
}
</style>
