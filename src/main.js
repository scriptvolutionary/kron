/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'

import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
	ripple: true
})

app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Menu', Menu)
app.component('Checkbox', Checkbox)
app.component('InputText', InputText)

app.mount('#app')
