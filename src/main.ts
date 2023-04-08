import { createApp } from "vue";
import App from "./App.vue";

import { firebaseApp } from "./firebase";
import { VueFire, VueFireAuth } from "vuefire";

createApp(App)
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
  .mount("#app");

import "./assets/main.css";
