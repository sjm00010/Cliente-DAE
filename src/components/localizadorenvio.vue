<template>
  <!-- Material form register -->
  <form>
    <p class="h4 text-center mb-4">Sigue tu envío</p>
<div class="grey-text">
        <mdb-input label="Nº de seguimiento de envío" icon="box" type="text"/>
         <div class="text-center">
      <mdb-btn color="primary">Buscar</mdb-btn>
    </div>
</div>
  </form>

</template>

<script>
import {mdbInput, mdbBtn} from 'mdbvue';
export default {
        name: 'localizadorenvio',
        components: {
        mdbInput,
        mdbBtn
        }
}
</script>
