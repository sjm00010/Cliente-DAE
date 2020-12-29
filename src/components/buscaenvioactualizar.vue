<template>
  <div>
    <!-- Material form register -->
    <form>
      <!--Formulario que busca el envio a actualizar-->
      <p class="h4 text-center mb-4">Busca un envío</p>
      <div class="grey-text">
        <mdb-input
          v-model="idEnvio"
          label="Nº de seguimiento de envío"
          icon="box"
          type="text"
        />
        <div class="text-center">
          <mdb-btn @click="getEnvio()" color="primary">Buscar</mdb-btn>
        </div>
      </div>
    </form>
    <p v-show="estadoEnvio != ''">El envio está: {{ estadoEnvio }}</p>
    <p v-show="error != ''">{{ error }}</p>
    <p v-show="puntosControl != null">
      Fechas de paso por los puntos de control hasta el momento
    </p>
    <ul>
      <li
        v-show="pc.fecha != null"
        v-for="(pc, index) in puntosControl"
        v-bind:key="index"
      >
        {{ pc.fecha }}
      </li>
    </ul>
    <div v-show="estadoEnvio!=''" class="text-center">
          <mdb-btn icon="plus fa-lg" @click="redireccion()" color="success"
            >Actualizar envío
            </mdb-btn
          >
        </div>
  </div>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";
import router from "@/router";

export default {
  name: "buscaenvioactualizar",
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
    };
  },
  methods: {
    redireccion() {
      router.push("/ujapack/editarEnvio");
    },
    async getEnvio() {
      this.error = "";
      this.estadoEnvio = "";
      this.puntosControl = null;
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
        //Hacer lista de puntos de control
        response = await fetch(baseURL + `/puntoControl`);
        const puntoControl = await response.json();
        this.puntosControl = puntoControl;
      } catch (err) {
        this.error = `No existe ningún envio con el id: ${this.idEnvio.trim()}`;
      }
    },
  },
};
</script>
