import Vue from "vue";
import VueGtag from "vue-gtag";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import Vuetify from "vuetify";

// eslint-disable-next-line  
delete L.Icon.Default.prototype._getIconUrl  
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({  
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
  iconUrl: require('leaflet/dist/images/marker-icon.png'),  
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
})

Vue.use(Vuetify);
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false;

Vue.use(
  VueGtag,
  {
    config: { id: "UA-165876127-3" }
  },
  router
);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
