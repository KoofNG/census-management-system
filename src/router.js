import Vue from 'vue';
import Router from 'vue-router';


import Home from './views/Home.vue';
import Form from './views/Form.vue';
import Preview from './views/Preview.vue';
import Success from './views/Success.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'form',
      component: Form
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    }
  ]
})
