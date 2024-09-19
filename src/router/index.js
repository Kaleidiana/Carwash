import { createRouter, createWebHistory } from 'vue-router';
import ServicesComponents from '../components/ServicesComponents.vue';
import ContactComponents from '../components/ContactComponents.vue';
import HomeComponent from '../components/HomeComponent.vue';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/services', component: ServicesComponents },
  { path: '/contact', component: ContactComponents },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
