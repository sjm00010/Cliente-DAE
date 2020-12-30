import Vue from 'vue';
import Router from 'vue-router';
import buscar from '@/views/buscar';
import envio from '@/views/envio';
import creaEnvio from '@/views/creaEnvio';
import actualizarEnvio from '@/views/actualizarEnvio';
import sesion from '@/views/inicioSesion';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/buscaEnvio'
    },
    {
      path: '/buscaEnvio',
      name: 'buscar',
      component: buscar
    },
    {
      path: '/informacionEnvio',
      name: 'envio',
      component: envio
    },
    {
      path: '/inicioSesion',
      name: 'sesion',
      component: sesion
    },
    {
      path: '/crearEnvio',
      name: 'crearEnvio',
      component: creaEnvio
    },
    {
      path: '/actualizarEnvio',
      name: 'actualizarEnvio',
      component: actualizarEnvio
    }
  ]
});
