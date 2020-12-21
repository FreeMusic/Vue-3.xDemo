import { createApp } from 'vue'
import router from "@/router";
import {store} from "@/router/store";
import App from "./App.vue";

const app = createApp(App).use(router).use(store)

const vm = app.mount('#app')
console.log(vm)
