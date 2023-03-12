import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import "./assets/main.css";
import "./assets/circle.css";

// Vue 3 Toasts
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

/* add icons to the library */
library.add(fas, fab, far);

const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.use(Vue3Toasity, {
  autoClose: 3000,
});
app.mount("#app");
