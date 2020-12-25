<template>
  <div id="app">
    <cabecera/>
    <!-- <img src="./assets/logo-mdb-vue-small.png"> -->
    <router-view/>
  </div>
</template>

<script>
import cabecera from '@/components/cabecera.vue'

export default {
  components: { cabecera},
  name: 'App'
}
</script>

