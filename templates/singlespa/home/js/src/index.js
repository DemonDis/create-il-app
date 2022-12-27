import { registerApplication, start } from 'single-spa';

registerApplication(
  'app',
  () => import('nav/App'),
  location => location.pathname.startsWith('/')
);


start();
