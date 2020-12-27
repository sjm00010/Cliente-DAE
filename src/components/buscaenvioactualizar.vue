<template>
  <!-- Material form register -->
  <form> <!--Formulario que busca el envio a actualizar-->
    <p class="h4 text-center mb-4">Busca un envío</p>
<div class="grey-text">
        <mdb-input label="Nº de seguimiento de envío" icon="box" type="text"/>
         <div class="text-center">
      <mdb-btn @click="redireccion()" color="primary">Buscar</mdb-btn>
    </div>
</div>
  </form>

</template>

<script>
import {mdbInput, mdbBtn} from 'mdbvue';
import router from "@/router";
export default {
  name: "buscaenvioactualizar",
  components:{
  mdbInput,
  mdbBtn
  },
  methods: {
  redireccion(){
    router.push("/ujapack/buscaEnvioActualizar/muestraEnvioOperario");
  }
  },

};
</script>
