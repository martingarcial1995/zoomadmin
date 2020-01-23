<template>
  <div id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
          </v-row>

          <v-list-item v-else :key="item.text" link :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <router-link
          :to="{ path: '/' }"
          style="color: #FFF; text-decoration: none;"
        >
          <span class="hidden-sm-and-down">AdminZoom</span>
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {
        icon: "mdi-chess-rook",
        text: "Inicio",
        to: { name: "dashboard" }
      },
      {
        icon: "mdi-book-minus-multiple",
        text: "Cursos",
        to: { name: "cursos" }
      },
      {
        icon: "mdi-account-badge-outline",
        text: "CV",
        to: { name: "curriculums" }
      },
      {
        icon: "mdi-account-badge-outline",
        text: "Prueba",
        to: { name: "prueba" }
      }
      // { icon: "mdi-settings", text: "Settings" },
      // { icon: "mdi-message", text: "Send feedback" },
      // { icon: "mdi-help-circle", text: "Help" },
      // { icon: "mdi-cellphone-link", text: "App downloads" },
      // { icon: "mdi-keyboard", text: "Go to the old version" }
    ]
  })
};
</script>
