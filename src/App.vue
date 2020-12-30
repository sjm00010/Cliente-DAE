<template>
  <div id="app">
    <cabecera/>
    <router-view/>
  </div>
</template>

<script>
import cabecera from '@/components/cabecera.vue'
export default {
  components: { cabecera },
  name: 'App'
}
</script>
