<template>
  <!-- Material form register -->
  <div class="container">
    <form class="card card-body">
      <p class="h4 text-center mb-4 card-title">Editar un envío</p>
      <div class="ml-3 grey-text">
        <mdb-input
          v-model="idEnvio"
          label="Introduce el ID del envío a actualizar"
          icon="arrows-alt-v"
          type="text"
          required
        />
        <mdb-input
          v-model="puntoControl"
          label="Introduce el punto de control del envío a actualizar"
          icon="arrows-alt-v"
          type="text"
          required
        />
        <div class="custom-control custom-switch">
          <input
            v-model="isSalida"
            type="checkbox"
            class="custom-control-input"
            id="customSwitches"
          />
          <label class="custom-control-label" for="customSwitches"
            >Introduce si el envío llega al PC o sale</label
          >
        </div>
        <div class="text-center">
          <mdb-btn icon="plus fa-lg" @click="actualizar()" color="success"
            >Crear</mdb-btn
          >
        </div>
      </div>
    </form>
    <p v-show="error != ''"> {{ error }}</p>
    <p v-show="mensaje != ''"> {{ mensaje }}</p>

  </div>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";

export default {
  name: "editarenvio",
  components: {
    mdbInput,
    mdbBtn,
  },
  data() {
    return {
      idEnvio: "",
      puntoControl: null,
      isSalida: false,
      error: "",
      mensaje:"",
    };
  },
  methods: {
    async actualizar() {
        this.error="";
        this.mensaje="";

      try {
        const baseURL = `http://localhost:8080/ujapack/envio/${this.idEnvio.trim()}/puntoControl/${this.puntoControl}?isSalida=${this.isSalida}`;
      let response = await fetch(baseURL,{
          method: "PUT",
          headers: new Headers({
            Authorization: "Basic " + btoa("operario:secret"),
          }),
        });
        if(!response.ok){
            this.error = "No se ha podido actualizar el envío";
        } else {
            this.mensaje = "Envío actualizado"
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
