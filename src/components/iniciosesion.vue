<template>
  <!-- Material form register -->
  <form>
    <p class="h4 text-center mb-4">Iniciar sesión</p>
    <div class="grey-text">
      <mdb-input label="Introduce tu usuario" icon="user" type="text"/>
      <mdb-input label="Introduce tu contraseña" icon="lock" type="password"/>
    </div>
    <div class="text-center">
      <mdb-btn color="primary">Aceptar</mdb-btn>
    </div>
  </form>
  <!-- Material form register -->
</template>

<script>
  import { mdbInput, mdbBtn } from 'mdbvue';
  export default {
    name: 'iniciosesion',
    components: {
      mdbInput,
      mdbBtn
    }
  }
</script>