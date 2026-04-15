import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css"; // ✅ IMPORTANT
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


createApp(App).use(router).use(Toast).mount("#app");
