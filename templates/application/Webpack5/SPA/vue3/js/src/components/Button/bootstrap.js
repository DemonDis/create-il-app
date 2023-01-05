import { createApp } from 'vue';
import ButtonVue from './index.vue'

const mount = (el) => {
  const app = createApp(ButtonVue);
  app.mount(el);
};

export { mount };
