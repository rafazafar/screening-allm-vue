import { createApp } from "vue"
import VueLazyLoad from "vue3-lazyload"

import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

const app = createApp(App)

app.use(router)
app.use(VueLazyLoad)
app.mount("#app")
