import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { setupCalendar } from 'v-calendar'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { fr } from 'vuetify/locale'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  locale: {
    locale: 'fr',
    fallback: 'fr',
    messages: { fr }
  },
  components,
  directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(setupCalendar, {})

app.mount('#app')
