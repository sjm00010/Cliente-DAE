import Vue from 'vue';
import Router from 'vue-router';
import localizadorenvio from '@/components/localizadorenvio';
import creaenvio from '@/components/creaenvio';
import iniciosesion from '@/components/iniciosesion';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', redirect: '/ujapack'
    },
    {
      path: '/ujapack/iniciarSesion',
      name: 'iniciosesion',
      component: iniciosesion
    },
    {
      path: '/ujapack/crearEnvio',
      name: 'creaenvio',
      component: creaenvio
    
    },
    {
      path: '/ujapack',
      name: 'localizadorenvio',
      component: localizadorenvio
    
    },

  ]
});
