import Vue from 'vue';
import Router from 'vue-router';
// import App from '../App.vue'
import CardDetail from '../components/CardDetail'
import Home from '../components/Home'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/APOD/:id',
      name: 'CardDetail',
      component: CardDetail,
    }
  ],
});