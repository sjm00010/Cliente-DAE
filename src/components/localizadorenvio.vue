<template>
  <div class="container">
    <!-- Material form register -->
    <form class="card card-body">
      <p class="h4 text-center mb-4 card-title">Sigue tu envío</p>
      <div class="ml-3 grey-text">
        <mdb-input
          v-model="idEnvio"
          label="Nº de seguimiento de envío"
          icon="box"
          type="text"
          required
        />
        <div class="text-center">
          <mdb-btn @click="getEnvio()" color="primary">Buscar</mdb-btn>
        </div>
      </div>
    </form>
    <div class="p-3 text-center">    
    <div class="alert alert-info" role="alert" v-show="estadoEnvio != ''">
      <p class= "h5 text-center"> Estado del envío </p>
      El envio está: {{ estadoEnvio }}
    </div>
    <div class="alert alert-info" role="alert" v-show="estadoEnvio != ''">
      <p class= "h5 text-center"> Fechas de paso </p>
      Fechas de paso por los puntos de control hasta el momento
      <ul>
        <li
          v-show="pc.fecha != null"
          v-for="(pc, index) in puntosControl"
          v-bind:key="index"
        >
          {{ pc.fecha }}
        </li>
      </ul>
    </div>
     <div class="alert alert-info" role="alert" v-show="situacion != null">
      <p class= "h5 text-center"> Ubicación actual  </p>
      Se encuentra ahora mismo en {{ situacion }}
    </div>
    </div>
    <div class="p-3 text-center">
      <div class="p-2 alert alert-danger" v-show="error != ''">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";
export default {
  name: "localizadorenvio",
  components: {
    mdbInput,
    mdbBtn,
  },
  data() {
    return {
      idEnvio: "",
      estadoEnvio: "",
      error: "",
      puntosControl: null,
      situacion: null,
    };
  },
  methods: {
    async getEnvio() {
      this.error = "";
      this.estadoEnvio = "";
      this.puntosControl = null;
      this.situacion = null;
      try {
        const baseURL = `http://localhost:8080/ujapack/envio/${this.idEnvio.trim()}`;
        let response = await fetch(baseURL);
        const envio = await response.json();

        switch (envio.estado) {
          case "EN_TRANSITO":
            this.estadoEnvio = "en tránsito";
            break;
          case "EN_REPARTO":
            this.estadoEnvio = "en reparto";
            break;
          case "ENTREGADO":
            this.estadoEnvio = "entregado";
            break;
          case "EXTRAVIADO":
            this.estadoEnvio = "extraviado";
            break;
          default:
        }
        //Lista de puntos de control
        response = await fetch(baseURL + `/puntoControl`);
        const puntoControl = await response.json();
        this.puntosControl = puntoControl;
        //Id del punto de control (para saber donde se encuentra el envío)
        response = await fetch(baseURL + `/situacion`);
        const situacionEnvio = await response.json();
        this.situacion = situacionEnvio.idPC;
      } catch (err) {
        this.error = `No existe ningún envio con el id: ${this.idEnvio.trim()}`;
      }
    },
  },
};
</script>
