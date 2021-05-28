import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import router from "./router/router";

library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faYoutube);

createApp(App).use(store).use(VueAxios, axios).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
