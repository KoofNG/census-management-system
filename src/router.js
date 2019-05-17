import Vue from 'vue';
import Router from 'vue-router';


import Home from './views/Home';
import Form from './views/Register';
import Preview from './views/Preview';
import Success from './views/Success';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Form
    },
    {
      path: '/preview',
      name: 'register',
      component: Preview
    },
    {
      path: '/success',
      name: 'register',
      component: Success
    }
  ]
})
