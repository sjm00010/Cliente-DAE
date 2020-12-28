import Vue from 'vue';
import Router from 'vue-router';
import localizadorenvio from '@/components/localizadorenvio';
import creaenvio from '@/components/creaenvio';
import iniciosesion from '@/components/iniciosesion';
import iniciosesion2 from '@/components/iniciosesion2';
import buscaenvioactualizar from '@/components/buscaenvioactualizar';
import muestraenviousuario from '@/components/muestraenviousuario';
import muestraenviooperario from '@/components/muestraenviooperario';
import muestracreaenvio from '@/components/muestracreaenvio';



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
      path: '/ujapack/buscaEnvioActualizar',
      name: 'buscaenvioactualizar',
      component: buscaenvioactualizar
    
    },
    {
      path: '/ujapack/buscaEnvioActualizar/muestraEnvioOperario',
      name: 'muestraenviooperario',
      component: muestraenviooperario
    
    },
    {
      path: '/ujapack/muestraEnvioUsuario',
      name: 'muestraenviousuario',
      component: muestraenviousuario
    
    },
    

    {
      path: '/ujapack',
      name: 'localizadorenvio',
      component: localizadorenvio
    
    },
    {
      path: '/ujapack/crearEnvio/muestraCreaEnvio',
      name: 'muestracreaenvio',
      component: muestracreaenvio
    
    },


  ]
});
