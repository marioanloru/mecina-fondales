<template>
  <v-app>
    <!--<v-navigation-drawer app> -->
      <!-- -->
    <!-- </v-navigation-drawer>-->

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main style="background-color: #ffeec3;">

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <v-row>
          <v-col col col-12 >
            <v-img style="position: absolute;" src="https://static.vecteezy.com/system/resources/previews/000/192/247/non_2x/vector-website-under-construction.jpg"></v-img>

          </v-col>
        </v-row>
      
        <!--<router-view></router-view>-->
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
//  import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    //  HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
