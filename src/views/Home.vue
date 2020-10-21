<template>
  <v-container fluid>
    <v-dialog v-model="laptopMessage" width="500">
      <v-card>
        <v-card-title class="headline  lighten-2" primary-title>
          Compatibilidad con portátiles
        </v-card-title>

        <v-card-text>
          Esta página web está en versión de pruebas y de momento está pensada
          para ser utilizada en <b>dispositivos móviles</b>. <br /><br />
          En poco tiempo estará disponible una versión adaptable que también
          funcione correctamente en monitores y portátiles. <br /><br />
          Se aconseja volver a acceder desde un dispositivo móvil, ya que la
          página puede tener un comportamiento inesperado para este tamaño de
          pantalla.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="laptopMessage = false">
            LO ENTIENDO
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
        style="padding: 8px;"
      >
        <v-hover v-if="card.clickable" v-slot:default="{ hover }">
          <v-card
            @click="changeView(card.path)"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            tile
          >
            <v-img
              :src="getImage(card.src)"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="25rem"
            >
              <v-card-title>
                <span class="title-pueblos">{{ card.title }}</span>
              </v-card-title>
            </v-img>
          </v-card>
        </v-hover>
        <v-card v-else tile>
          <v-img
            :src="getImage(card.src)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="25rem"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <div class="body">
        <h1>Mecina Fondales</h1>
        <span>
          En el corazón de la Alpujarra granadina se encuentra Mecina Fondales,
          escalón natural entre Sierra Nevada y la costa mediterránea.
          <br /><br />
          Conserva y define a la perfección la esencia de lo que es un
          <i>pueblo alpujarreño</i>. <br /><br />
          Un lugar recóndito que ha sobrevivido al paso del turismo y del
          tiempo, tradiciones que se conservan, así como singular arquitectura
          de sus viviendas, perfectamente adaptadas al irregular terreno y
          climatología de la zona, con un caracter donde se refleja la memoria
          de su pasado morisco.<br /><br />
          Dividido en 3 núcleos:
          <b>Mecina, Mecinilla y Fondales</b> que conforman la pedanía de
          <b>Mecina Fondales</b> y que conviven como uno solo, próximo al margen
          derecho del rio Trevélez. <br /><br />
          Explora sus calles, conoce sus costumbres, satisface tu estómago con
          sus suculentos platos y déjate embriagar por un entorno único que
          visites te verás obligado a volver.
        </span>
      </div>
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
          <l-marker :lat-lng="popupMecinilla">
            <l-popup>
              <div>
                Mecinilla
              </div>
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="popupFondales">
            <l-popup>
              <div>
                Fondales
              </div>
            </l-popup>
          </l-marker>
        </l-map>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  name: "Home",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data: () => ({
    cards: [
      {
        title: "Mecina Fondales",
        path: "/mecina-fondales",
        src: "mecina-fondales",
        flex: 12,
        clickable: false
      },
      {
        title: "Mecina",
        path: "/mecina",
        src: "mecina",
        flex: 4,
        clickable: true
      },
      {
        title: "Mecinilla",
        path: "/mecinilla",
        src: "mecinilla",
        flex: 4,
        clickable: true
      },
      {
        title: "Fondales",
        path: "/fondales",
        src: "fondales",
        flex: 4,
        clickable: true
      },
      { src: "plano", flex: 0, clickable: false }
    ],
    zoom: 16,
    center: latLng(36.92753, -3.321636),
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    popupMecina: latLng(36.929812, -3.323031),
    popupMecinilla: latLng(36.927462, -3.323361),
    popupFondales: latLng(36.925708, -3.321693),
    currentZoom: 11.5,
    currentCenter: latLng(47.41322, -1.219482),
    showParagraph: false,
    mapOptions: {
      zoomSnap: 0.5
    },
    showMap: true,
    laptopMessage: false
  }),
  created() {
    if (window.innerWidth > 500) {
      this.laptopMessage = true;
    }
  },
  methods: {
    changeView(path) {
      if (path) {
        const self = this;
        self.$router.push(path);
      }
    },
    getImage: img => {
      const imagesJPG = require.context("../assets/img/", false, /\.jpg$/);
      const imagesJPEG = require.context("../assets/img/", false, /\.jpeg$/);
      switch (img) {
        case "mecina-fondales2":
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
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
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

.title-pueblos {
  font-size: 13px;
}
</style>
