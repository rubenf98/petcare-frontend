import Vue from 'vue'
import VueRouter from 'vue-router';
import App from "./App.vue";
import routes from './routes'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {

    return { x: 0, y: 0 }


  }, mode: 'history', routes
});

router.beforeEach((to, from, next) => {
  if (to.name.includes("dashboard")) {
    if (!localStorage.token) {
      next('/');
    }
  }
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');