import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Navbar from '@/components/Navbar.vue'
import Textbox from './components/Textbox.vue'


const app  = createApp(App)
app.use(router).component('nav-bar',Navbar)
app.component('text-box', Textbox)
app.mount('#app')
