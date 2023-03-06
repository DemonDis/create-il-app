import { registerApplication, start } from 'single-spa';

registerApplication(
  'remote',
  () => import('remote/remote'),
  location => location.pathname.startsWith('/')
);


start();
