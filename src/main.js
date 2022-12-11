import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { Quasar } from 'quasar'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUser)
library.add(faBagShopping)

import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
