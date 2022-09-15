import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

//* Vuex Store
app.use(store)

//* Router
app.use(router)

app.mount('#app')
