<template>
  <v-app>

    <Header/>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container fluid>
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </v-container>
    </v-main>

    <Footer/>

  </v-app>
</template>

<script>
//  import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer,
    //  HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
