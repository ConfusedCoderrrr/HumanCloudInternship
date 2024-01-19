
import { createApp } from 'vue'
import App from './App.vue'
import Cmp from './Cmp.vue'
import newCmp from './newCmp.vue'
import ElementPlus from 'element-plus'


const app=createApp(App);
app.use(ElementPlus);
app.component('Cmp', Cmp);
app.mount('#app');
