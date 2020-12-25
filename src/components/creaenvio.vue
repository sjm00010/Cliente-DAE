<template>
  <!-- Material form register -->
  <form>
    <p class="h4 text-center mb-4">Creación de envío</p>
    <div class="grey-text">
      <mdb-input
        label="Introduce el alto del paquete"
        icon="arrows-alt-v"
        type="text"
      />
      <mdb-input
        label="Introduce el ancho del paquete"
        icon="arrows-alt-h"
        type="text"
      />
      <mdb-input
        label="Introduce el peso del paquete"
        icon="weight"
        type="text"
      />
      <mdb-input
        label="Introduce el remitente"
        icon="eye-dropper"
        type="text"
      />
      <mdb-input label="Introduce el destinatario" icon="box" type="text" />

      <div class="text-center">
        <mdb-btn color="primary">Aceptar</mdb-btn>
      </div>
    </div>
  </form>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";

export default {
  name: "creaenvio",
  components: {
    mdbInput,
    mdbBtn,
  },
};
</script>
