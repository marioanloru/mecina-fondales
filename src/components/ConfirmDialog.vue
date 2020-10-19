<template>
  <v-dialog v-model="confirmDialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <span
        ><br />Más información en
        <a v-on="on" v-bind="attrs" @click="showConfirm(link)">
          {{ linkName }}</a
        ></span
      >
    </template>
    <v-card>
      <v-card-title class="headline">
        <h3>Se abrirá el enlace en una nueva página</h3>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="confirmDialog = false">
          Cancelar
        </v-btn>
        <v-btn color="blue darken-1" text @click="confirmDialog = false">
          <a :href="link" target="_blank" style="text-decoration: none;"
            >Continuar</a
          >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: {
    link: String,
    linkName: String
  },
  data: () => ({
    confirmDialog: false
  }),
  methods: {
    showConfirm(link) {
      this.link = link;
      this.confirmDialog = true;
    },
    openLink(path) {
      const routeData = this.$router.resolve({ name: path });
      window.open(routeData.href, "_blank");
      this.confirmDialog = false;
      this.link = null;
    }
  }
};
</script>
<style>
.body {
  padding: 0px 16px;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}
</style>
