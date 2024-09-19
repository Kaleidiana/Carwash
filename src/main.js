import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // Optional: If you need Bootstrap JS components

const app = createApp(App);

// Use the router in your app
app.use(router);

app.mount('#app');
