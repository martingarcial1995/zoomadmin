<template>
  <div class="send">
    <form action>
      <h1 style="color:#707070">Dashboard</h1>
      <p style="margin-top: 50px;color: #707070;">Escribir Publicación</p>
      <div class="dashboardPublication">
        <textarea
          id="text-publication"
          class="dashboardPublication-itemOne"
          style="resize:none;"
          placeholder="Ingresar texto...."
          v-model="textPublication"
        ></textarea>
        <div class="dashboardPublication-itemTwo">
          <div class="btn__up__image">
            <!-- <input class="sectionOne" type="button" value="Subir una imagen" /> -->
            <input id="boton" type="file" />
            <label for="boton" class="btn__image">
              <svg class="icono" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H10L12,6H20M10.75,13H14V17H16V13H19.25L15,8.75"
                />
              </svg>
              subir imagen
            </label>
          </div>
          <div>
            <input @click="sendPublication" type="button" class="sectionTwo" value="Publicar" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Publication",
  data(){
    return{
      textPublication:'',

    }
  },
  computed:{

  },
  methods:{

    sendPublication(){
      this.$store.commit('sendPublication', this.textPublication);
      this.textPublication = "";
    }

  }


};
</script>


<style scoped>
.send {
  padding: 0 15px;
}
.dashboardPublication {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 247px 77px;
}
.dashboardPublication-itemOne {
  grid-column: span 2;
  border: 1px solid #9a959582;
  border-radius: 5px;
  padding: 14px 12px 12px 12px;
  outline: none;
  color: #827979;
}
.dashboardPublication-itemTwo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn__up__image {
  position: relative;
  width: auto;
  overflow: hidden;
  height: auto;
  border: 1px solid #333333;
  z-index: 100;
}
.btn__image {
  border: 1px solid #ccc;
  display: flex;
  padding: 5px 15px;
  cursor: pointer;
}
.icono {
  margin-right: 10px;
}
input[type="file"] {
  display: none;
}
.sectionOne {
  width: 200px;
  border: 1px solid #a9a1a1;
  height: 45px;
  outline: none;
  font-size: 18px;
}
.sectionTwo {
  background: #1867c0;
  color: white;
  border-radius: 8px;
  width: 160px;
  height: 40px;
  font-size: 18px;
  outline: none;
}
</style>
