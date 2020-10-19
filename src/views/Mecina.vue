<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12">
        <v-card elevation="2">
          <v-carousel
            show-arrows-on-hover
            hide-delimiters
            cycle
            class="carousel"
          >
            <v-carousel-item
              v-for="(item, i) in villageItems"
              :key="i"
              :src="getImage(item.img)"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <span>
          Mecina es el núcleo situado a mayor altitud y mas grande de los tres.
          <br /><br />
          Forma parte del término municipal de la <b>La Tahá</b> junto a
          Mecinilla y Fondales. Recorriendo sus calles puede respirarse el
          ambiente alpujarreño mas autóctono, acompañado de la singular
          arquitectura de sus casas. <br />

          Las esquinas redondeadas de los edificios, los reconocidos techos de
          las casas realizados con vigas de madera y piedra, los callejones,
          galerías o pasadizos como adarves son algunos detalles que pueden
          apreciarse en sus calles. <br />

          Al entrar al pueblo dejamos a la derecha un tradicional lavadero junto
          a una fuente. En este punto encontramos que la carretera se bifurca en
          dos vías principales; a la <i>derecha</i> podemos encontrar la iglesia
          y la calle <i>"La Isla"</i>, y si nos decidimos por el camino de la
          izquierda tendremos el grueso del pueblo.
        </span>
      </v-col>
    </v-row>

    <v-row dense style="margin-top: 8px;">
      <v-card tile style="height: 450px; width: 100%">
        <l-map
          v-if="showMap"
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 100%"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        >
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-marker :lat-lng="popupMecina">
            <l-popup>
              <div>
                Mecina
              </div>
            </l-popup>
          </l-marker>
        </l-map>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
export default {
  name: "Fondales",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data: () => ({
    villageItems: [
      {
        img: "mecina-arcoiris"
      },
      {
        img: "era-mecina"
      },
      {
        img: "mecina"
      },
      {
        img: "santos"
      }
    ],
    zoom: 16,
    center: latLng(36.92753, -3.321636),
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    popupMecina: latLng(36.929812, -3.323031),
    currentZoom: 11.5,
    currentCenter: latLng(47.41322, -1.219482),
    showParagraph: false,
    mapOptions: {
      zoomSnap: 0.5
    },
    showMap: true
  }),
  methods: {
    getImage: img => {
      const imagesJPG = require.context("../assets/img/", false, /\.jpg$/);
      const imagesJPEG = require.context("../assets/img/", false, /\.jpeg$/);
      switch (img) {
        case "mecina-fondales2":
        case "puente":
          return imagesJPEG(`./${img}.jpeg`);
        default:
          return imagesJPG(`./${img}.jpg`);
      }
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
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
