import './assets/css/flex.css'
import './assets/css/flex-grid.css'
import './assets/css/main.css'
import './assets/css/colours.css'
import './assets/css/icones.css'
import './assets/css/responsive.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import App from './App.vue'
import {routes} from './routes'

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

router.beforeEach((to, from, next) =>{
    next();
    store.commit('hideNavigation');
    store.commit('hideFormNavigation');
    store.commit('hideHistory');
    store.commit('removeOpacity');
    store.commit('hideTagsList');
    store.commit('removeFormShadow');
    store.commit('hideModalNotAuth');

    store.commit('hideMobileFormSearch');
    store.commit('hideMobileNavigationList');
});
