import { createApp } from 'vue';
import App from './App.vue';

// import webpackContent from 'webpack-side/Content';
const app = createApp(App);

// app.component('webpack-content', webpackContent);

app.mount('#app');
