import { createApp } from "vue"
import VueLazyLoad from "vue3-lazyload"
import { createPinia } from "pinia"
import axios from "axios"
import VueAxios from "vue-axios"

import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueLazyLoad)
app.use(VueAxios, axios)

app.mount("#app")
