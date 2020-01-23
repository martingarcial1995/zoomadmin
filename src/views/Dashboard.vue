<template>
  <div class="dashboard">
    <div class="publication">
      <publication-send />
    </div>

    <div class="publication gris">
      <publication-card v-for="(publi, index) in publications" :key="index" :publication="publi" />

    </div>
  </div>
</template>

<script>
import PublicationCard from "@/components/PublicationCard.vue";
import PublicationSend from "@/components/PublicationSend.vue";
import { mapState} from 'vuex'
export default {
  name: "Dashboard",
  data() {
    return {
    };
  },
  computed:{

    ...mapState(['publications'])

  },

  components: {
    PublicationCard,
    PublicationSend
  },
  methods: {}
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.dashboard {
  width: 100%;
  margin: 0px auto;
  display: flex;
}
.linea {
  height: calc(100vh - 100px);
  border: 0.5px solid #a3a3a3;
  margin: 20px 0 0 15px;
}
.publication {
  width: 100%;
  margin: 0;
  height: calc(100vh - 66px);
  overflow: scroll;
  padding: 10px;
}
.gris {
  background-color: rgba(155, 204, 204, 0.25);
  order: -1;
}
</style>
