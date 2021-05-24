import { createApp } from 'vue'
import App from './App.vue'
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

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
