import Vue from 'vue';
import Router from 'vue-router';
import localizadorenvio from '@/components/localizadorenvio';
import creaenvio from '@/components/creaenvio';
import iniciosesion from '@/components/iniciosesion';
import iniciosesion2 from '@/components/iniciosesion2';
import actualizaenvio from '@/components/actualizaenvio';


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
      path: '/ujapack/iniciarSesion2',
      name: 'iniciosesion2',
      component: iniciosesion2
    },
    {
      path: '/ujapack/crearEnvio',
      name: 'creaenvio',
      component: creaenvio
    
    },
    {
      path: '/ujapack/actualizarEnvio',
      name: 'actualizaenvio',
      component: actualizaenvio
    
    },
    {
      path: '/ujapack',
      name: 'localizadorenvio',
      component: localizadorenvio
    
    },

  ]
});
