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
          Mecinilla es la hermana pequeña de las tres, pero no por ello con
          menos encanto. Con una era propia y calles laberínticas que conducen
          hasta un atajo que te llevará hasta Fondales, perderse por los caminos
          es mandatorio, para poder apreciar cada rincón<br /><br />
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
          <l-marker :lat-lng="popupMecinilla">
            <l-popup>
              <div>
                Mecinilla
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
        img: "mecinilla"
      }
    ],
    lifestyleItems: [
      {
        img: "santos"
      }
    ],
    placesItems: [
      {
        img: "rio-alto"
      },
      {
        img: "rio"
      },
      {
        img: "puente"
      }
    ],
    zoom: 16,
    center: latLng(36.92753, -3.321636),
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    popupMecinilla: latLng(36.927462, -3.323361),
    currentZoom: 11.5,
    currentCenter: latLng(47.41322, -1.219482),
    showParagraph: false,
    mapOptions: {
      zoomSnap: 0.5
    },
    showMap: true,
    laptopMessage: false
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
