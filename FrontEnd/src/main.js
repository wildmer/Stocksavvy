
import { createApp } from 'vue'
import { Quasar, Notify} from 'quasar'
import { createPinia } from 'pinia'
// import {axios } from 'axios'

// import './style.css'

import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from "./routes/routes.js"
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'
// vamos a crear un objeto de vue router


const pinia = createPinia()


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)
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
    config: { notify: { /* look at QuasarConfOptions from the API card */ } } 
  });
// app.use(axios)
app.use(pinia)
app.use(router)

app.mount('#app')