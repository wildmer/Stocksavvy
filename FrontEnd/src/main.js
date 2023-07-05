import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Notify } from "quasar";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes/routes.js";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import { axios } from 'axios'

// import './style.css'

import App from "./App.vue";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "@quasar/extras/bootstrap-icons/bootstrap-icons.css";
// vamos a crear un objeto de vue router

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Import Quasar css
import "quasar/src/css/index.sass";

//AXIOS
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:4501' // Aquí debes poner la URL de tu servidor backend
// })

// axiosInstance.get('/api/data')
//   .then(response => {
//     console.log(response.data)
//   })
//   .catch(error => {
//     console.log(error)
//   })
// const App = createApp(App)

app.use(Quasar, {
  plugins: { Notify },
  config: {
    notify: {
      /* look at QuasarConfOptions from the API card */
    },
  },
});
// app.use(axios)
app.use(router);
app.use(pinia);

app.mount("#app");
