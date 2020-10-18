<template>
  <v-container fluid>
    <!-- Barranquillo -->
    <v-row dense>
      <v-col cols="12">
        <v-card elevation="2">
          <v-carousel show-arrows-on-hover hide-delimiters cycle class="small-carousel">
            <v-carousel-item v-for="(item,i) in barranquillo" :key="i" :src="getImage(item.img)"></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense style="padding: 8px;">
      <span>¿Buscas comida tradicional? <b>Bar el Barranquillo</b> es el lugar que buscas.</span> <br>
      <span>Platos típicos caseros preparados con tiempo y esmero, para disfrutar de un ambiente agradable y relajado en un negocio familiar. </span>
      <span>Situado a la entrada del pueblo, con una terraza con vistas a la iglesia y parte de Mecina. </span>

      <!-- TODO: Move this confirm dialog into a component to avoid repeating code -->
      <v-dialog
          v-model="confirmDialog"
          persistent
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <span><br>Más información en <a v-on="on" v-bind="attrs" @click="showConfirm(linkBarranquillo)"> Bar el Barranquillo</a></span>
          </template>
          <v-card>
            <v-card-title class="headline">
              <h3>Se abrirá el enlace en una nueva página</h3>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="confirmDialog = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="confirmDialog = false;"
              >
                <a :href="link" target="_blank" style="text-decoration: none;">Continuar</a>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-row>
    <!-- End Barranquillo -->

    <!-- Mora luna -->
    <v-row dense>
      <v-col cols="12">
        <v-card elevation="2">
          <v-carousel show-arrows-on-hover hide-delimiters cycle class="small-carousel">
            <v-carousel-item v-for="(item,i) in moraluna" :key="i" :src="getImage(item.img)"></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense style="padding: 8px;">
      <span>¿Pizzería argentina en un pueblo recóndito de la Alpujarra Granadina? Si, no te has equivocado, y una vez lo visites lo darás a conocer entre tus conocidos.</span> <br>
      <span>Un restaurante con un ambiente único y buena comida, junto con buenas vistas situado junto a la carretera camino a <b>Ferreirola</b> </span>
      <span>Situado a la entrada del pueblo, con una terraza con vistas a la iglesia y parte de Mecina. </span>

      <!-- TODO: Move this confirm dialog into a component to avoid repeating code -->
      <v-dialog
          v-model="confirmDialog"
          persistent
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <span><br>Más información en <a v-on="on" v-bind="attrs" @click="showConfirm(linkMoraluna)"> Piano Bar la Cueva de la Mora Luna</a></span>
          </template>
          <v-card>
            <v-card-title class="headline">
              <h3>Se abrirá el enlace en una nueva página</h3>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="confirmDialog = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="confirmDialog = false;"
              >
                <a :href="link" target="_blank" style="text-decoration: none;">Continuar</a>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-row>
    <!-- End mora luna -->

    <!-- L'Atelier -->
    <v-row dense>
      <v-col cols="12">
        <v-card elevation="2">
          <v-carousel show-arrows-on-hover hide-delimiters cycle class="small-carousel">
            <v-carousel-item v-for="(item,i) in latelier" :key="i" :src="getImage(item.img)"></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense style="padding: 8px;">
      <span>¿Buscas comida tradicional? <b>Bar el Barranquillo</b> es el lugar que buscas.</span> <br>
      <span>Platos típicos caseros preparados con tiempo y esmero, para disfrutar de un ambiente agradable y relajado en un negocio familiar. </span>
      <span>Situado a la entrada del pueblo, con una terraza con vistas a la iglesia y parte de Mecina. </span>

      <!-- TODO: Move this confirm dialog into a component to avoid repeating code -->
      <v-dialog
          v-model="confirmDialog"
          persistent
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <span><br>Más información en <a v-on="on" v-bind="attrs" @click="showConfirm(linkLatelier)"> Restaurante L'Atelier</a></span>
          </template>
          <v-card>
            <v-card-title class="headline">
              <h3>Se abrirá el enlace en una nueva página</h3>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="confirmDialog = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="confirmDialog = false;"
              >
                <a :href="link" target="_blank" style="text-decoration: none;">Continuar</a>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-row>
    <!-- End L'Atelier -->

    <!-- Hotel -->
    <v-row dense>
      <v-col cols="12">
        <v-card elevation="2">
          <v-carousel show-arrows-on-hover hide-delimiters cycle class="small-carousel">
            <v-carousel-item v-for="(item,i) in hotel" :key="i" :src="getImage(item.img)"></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense style="padding: 8px;">
      <span>¿Buscas comida tradicional? <b>Bar el Barranquillo</b> es el lugar que buscas.</span> <br>
      <span>Platos típicos caseros preparados con tiempo y esmero, para disfrutar de un ambiente agradable y relajado en un negocio familiar. </span>
      <span>Situado a la entrada del pueblo, con una terraza con vistas a la iglesia y parte de Mecina. </span>

      <!-- TODO: Move this confirm dialog into a component to avoid repeating code -->
      <v-dialog
          v-model="confirmDialog"
          persistent
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <span><br>Más información en <a v-on="on" v-bind="attrs" @click="showConfirm(linkHotel)"> Hotel de Mecina Fondales</a></span>
          </template>
          <v-card>
            <v-card-title class="headline">
              <h3>Se abrirá el enlace en una nueva página</h3>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="confirmDialog = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="confirmDialog = false;"
              >
                <a :href="link" target="_blank" style="text-decoration: none;">Continuar</a>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-row>
    <!-- End hotel -->
   
  </v-container>
</template>

<script>
export default {
  name: "Fondales",
  data: () => ({
    barranquillo: [
      {
        img: "barranquillo"
      },
      {
        img: "barranquillo2"
      },
    ],
    moraluna: [
      {
        img: "moraluna"
      },
      {
        img: "moraluna2"
      },
      {
        img: "moraluna3"
      },
    ],
    latelier: [
      {
        img: "latelier"
      }
    ],
    hotel: [
      {
        img: "hotel"
      }
    ],
    confirmDialog: false,
    link: null,
    linkBarranquillo: 'https://www.tripadvisor.es/Restaurant_Review-g1937614-d18940897-Reviews-Bar_Restaurante_El_Barranquillo-Mecina_Fondales_La_Taha_Province_of_Granada_And.html',
    linkMoraluna: 'https://www.tripadvisor.es/Restaurant_Review-g1937614-d1937577-Reviews-La_Cueva_de_Mora_Luna-Mecina_Fondales_La_Taha_Province_of_Granada_Andalucia.html',
    linkLatelier: 'https://www.tripadvisor.es/Hotel_Review-g1937614-d563375-Reviews-L_Atelier-Mecina_Fondales_La_Taha_Province_of_Granada_Andalucia.html',
    linkHotel: 'https://www.tripadvisor.es/Hotel_Review-g1937614-d566706-Reviews-Mecina_Fondales_Hotel-Mecina_Fondales_La_Taha_Province_of_Granada_Andalucia.html',
}),
  methods: {
    getImage: img => {
      const imagesJPG = require.context("../assets/img/food/", false, /\.jpg$/);
      const imagesJPEG = require.context(
        "../assets/img/food/",
        false,
        /\.jpeg$/
      );
      switch (img) {
        case "mecina-fondales2":
        case "puente":
        case "barranquillo2":
          return imagesJPEG(`./${img}.jpeg`);
        default:
          return imagesJPG(`./${img}.jpg`);
      }
    },
    showConfirm(link) {
      this.link = link;
      this.confirmDialog = true;
    },
    openLink(path) {
      console.log('PATTH QUE LLEGA YU LINK', path, '---', this.link)
      const routeData = this.$router.resolve({ name: path });
      window.open(routeData.href, '_blank');
      this.confirmDialog = false;
      this.link = null;
    },
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
