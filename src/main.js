import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import VueAnime from 'vue-animejs';
import Starx from './lib/starx-wsclient';
import Buefy from 'buefy'
import './assets/scss/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faCheck, faAngry, faHatCowboy,faAdjust, faOtter, faPastafarianism,
  faBaby, faBeer, faHippo, faCannabis,
  faCat, faCocktail, faDizzy, faFighterJet} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faAngry, faHatCowboy, faAdjust,faOtter, faPastafarianism,
    faBaby, faBeer, faHippo, faCannabis,
    faCat, faCocktail, faDizzy, faFighterJet);
Vue.component('vue-fontawesome', FontAwesomeIcon);

// ...

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});
Vue.config.productionTip = false
Vue.use(Starx,{params:{host: '192.168.64.2', port:'30007', path: '/'}, store: store })
Vue.use(VueAnime)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

