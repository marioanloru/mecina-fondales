<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar>
      <v-tabs>
        <v-tab v-for="tab in tabs" v-bind:key="tab.name" :to="tab.path"> {{tab.name}}</v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    tabs: [{
      name: "Inicio",
      path: "/home",
    },
    {
      name: "Actividades",
      path: "/actividades",
    },
    {
      name: "Rutas",
      path: "/rutas",
    },
    {
      name: "Comida",
      path: "/comida",
    },
    {
      name: "Lugares",
      path: "/lugares",
    }]   
  })
}
</script>