import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import config from "~~/config/primevue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, config);
});
