import '@/styles/main.css';

import { createApp } from 'vue/dist/vue.esm-bundler';

// vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './router';
import App from './App.vue';
import vueNearPlugin from './plugins/near-api';
import { register as registerSwiper } from 'swiper/element/bundle';

const vuetify = createVuetify({
  components,
  directives,
});

export const app = createApp(App);

app.use(router);
app.use(vuetify);

vueNearPlugin(app)
registerSwiper();

app.mount('#app');
