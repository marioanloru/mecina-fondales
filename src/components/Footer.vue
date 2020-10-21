<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      style="width: 100%;"
    >
      <v-divider></v-divider>

      <v-card-text class="white--text">
        <v-dialog v-model="confirmDialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-for="icon in icons"
              @click="showConfirm(icon.url)"
              :key="icon"
              class="mx-4 white--text"
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon size="24px">
                {{ icon.iconName }}
              </v-icon>
            </v-btn>
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
        <span>2020 — <strong>Mecina Fondales</strong></span>

        <v-dialog v-model="contactDialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <span v-on="on" v-bind="attrs" style="cursor: pointer;">
              —
              <span style="text-decoration: underline;"
                >¿Quieres anunciarte?</span
              ></span
            >
          </template>

          <v-card>
            <v-card-title>
              Correo de contacto
            </v-card-title>

            <v-card-text>
              Para más información, cualquier duda o sugerencia:
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="contactDialog = false">
                Continuar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      {
        iconName: "mdi-facebook",
        url: "https://www.facebook.com/groups/mecinafondales/"
      }
    ],
    attrs: {
      absolute: true
    },
    confirmDialog: false,
    contactDialog: false,
    link: null
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
