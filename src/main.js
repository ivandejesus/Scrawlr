import { createApp } from 'vue'
import store from "./store";
import App from './App.vue'

import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'

const app = createApp(App)

app.use(store)
app.mount('#app')