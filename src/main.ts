import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Dialog, Notify } from "quasar";
import quasarLang from "quasar/lang/ja";

import App from "./App.vue";
import router from "./router";

// Import quasar CSS
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// Setup quasar
app.use(Quasar, {
  plugins: [Dialog, Notify],
  lang: quasarLang,
});

app.mount("#app");
