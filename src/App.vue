<template>
  <div id="app">
    <cabecera/>
    <!-- <img src="./assets/logo-mdb-vue-small.png"> -->
    <creaenvio/>
    <iniciosesion/>
    <router-view/>
  </div>
</template>

<script>
import cabecera from '@/components/cabecera.vue'
 import creaenvio from '@/components/creaenvio.vue'
import iniciosesion from '@/components/iniciosesion.vue'

export default {
  components: { cabecera, creaenvio, iniciosesion },
  name: 'App'
}
</script>

