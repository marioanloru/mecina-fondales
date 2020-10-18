<template>
  <v-app>
    <v-app-bar fixed width="100%">
      <Header style="width: 100%"/>

    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="main">
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

<style>
 header:first-child {
   padding: 0px;
 }
 .main {
   margin-top: 64px;
 }

 h3 {
   font-size: 13px;
 }
 
 span {
   font-size: 12px;
 }

 .carousel {
   max-height: 450px;
 }

 .small-carousel {
   max-height: 350px;
 }
</style>
