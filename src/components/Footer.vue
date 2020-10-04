<template>
  <v-footer
    v-bind="attrs"
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      style="width: 100%;"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        ¿Quieres anunciarte? Contacte aqui
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        2020 — <strong>Mecina Fondales - Mario López</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    attrs: {
      absolute: true
    },
  })
}
</script>