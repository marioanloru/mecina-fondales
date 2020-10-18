<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12">
        <v-card elevation="2">
          <v-carousel show-arrows-on-hover hide-delimiters cycle class="carousel">
            <v-carousel-item 
              v-for="(item,i) in villageItems"
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
          Fondales es el núcleo situado a menor altitud y mas cercano al río. <br><br>
          Sus calles reflejan la vida alpujarreña mas autóctona, cada rincón alberga sorpresas que no pasarán desapercibidas. Un pueblo de escaso tamaño que poco a poco recupera la vida en sus ancianas calles.
        </span>
      </v-col>        
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <v-card elevation="2">
          <v-carousel show-arrows-on-hover hide-delimiters cycle class="carousel">
            <v-carousel-item
              v-for="(item,i) in lifestyleItems"
              :key="i"
              :src="getImage(item.img)"
            ></v-carousel-item>
          </v-carousel>
        </v-card>  
      </v-col> 
    </v-row>

    <v-row dense>
      <span style="padding: 8px;">
        Uno de los descubrimientos más recientes en Fondales es la puerta de la Ermita. <br><br>
        Durante unas obras de restauración de la misma, se descubrío que la fachada albergaba un secreto, un arco con siglos de antigüedad cuya belleza podemos observar a día de hoy.
      </span>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card elevation="2">
          <v-img
            :src="getImage('era-fondales')"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="25rem"
          >
          </v-img>
        </v-card>  
      </v-col>
    </v-row>

    <v-row dense>
      <span style="padding: 8px;">Una visita obligada es el camino del río. Aquí podemos observar un antiguo puente de romano así como un antiguo molino derruido junto a él.</span>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card elevation="2">
          <v-carousel show-arrows-on-hover hide-delimiters cycle class="carousel">
            <v-carousel-item
              v-for="(item,i) in placesItems"
              :key="i"
              :src="getImage(item.img)"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Fondales",
  data: () => ({
    villageItems: [
      {
        img: 'fondales',
      },
      {
        img: 'fondales-casa',
      },
      {
        img: 'fondales-placeta',
      },
      {
        img: 'fondales-calle',
      },
      {
        img: 'era-fondales'
      }
    ],
    lifestyleItems: [
      {
        img: 'desbrozadora',
      },
      {
        img: 'caballos',
      },
    ],
    placesItems: [
      {
        img: 'rio-alto',
      },
      {
        img: 'rio',
      },
      {
        img: 'puente',
      },
    ]
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
  }
}
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
