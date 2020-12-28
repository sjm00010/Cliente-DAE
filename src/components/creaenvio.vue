<template>
  <!-- Material form register -->
  <form>
    <p class="h4 text-center mb-4">Creación de envío</p>
    <div class="ml-3 grey-text">
      <mdb-input
        v-model="alto"
        label="Introduce el alto del paquete"
        icon="arrows-alt-v"
        type="number"
        required
      />
      <mdb-input
        v-model="ancho"
        label="Introduce el ancho del paquete"
        icon="arrows-alt-h"
        type="number"
        required
      />
      <mdb-input
        v-model="peso"
        label="Introduce el peso del paquete"
        icon="weight"
        type="number"
        required
      />
      <div class="row">
        <blockquote class="col ml-3 blockquote bq-primary">
          <mdb-input
            v-model="origen.dni"
            label="Introduce el dni del remitente"
            icon="id-card"
            type="text"
            required
          />
          <mdb-input
            v-model="origen.nombre"
            label="Introduce el nombre del remitente"
            icon="user"
            type="text"
            required
          />
          <mdb-input
            v-model="origen.apellidos"
            label="Introduce los apellidos del remitente"
            icon="user"
            type="text"
            required
          />
          <select
            class="browser-default custom-select"
            v-model="origen.localizacion"
            icon="map-marker-alt"
            required
          >
            <option value="undefined" selected disabled>
              Elige localización del remitente
            </option>
            <option
              v-for="(option, index) in localidades"
              v-bind:key="index"
              v-bind:value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </blockquote>

        <div class="col ml-3">
          <mdb-input
            v-model="destino.dni"
            label="Introduce el dni del destinatario"
            icon="id-card"
            type="text"
            required
          />
          <mdb-input
            v-model="destino.nombre"
            label="Introduce el nombre del destinatario"
            icon="user"
            type="text"
            required
          />
          <mdb-input
            v-model="destino.apellidos"
            label="Introduce los apellidos del destinatario"
            icon="user"
            type="text"
            required
          />
          <select
            class="browser-default custom-select"
            v-model="destino.localizacion"
            icon="map-marker-alt"
            required
          >
            <option value="undefined" selected disabled>
              Elige localización del destinatario
            </option>
            <option
              v-for="(option, index) in localidades"
              v-bind:key="index"
              v-bind:value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>

      <div class="text-center">
        <mdb-btn @click="getIdPrecio()" color="primary">Aceptar</mdb-btn>
      </div>
    </div>
  </form>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";
import router from "@/router";

export default {
  name: "creaenvio",
  components: {
    mdbInput,
    mdbBtn,
  },
  data() {
    return {
      idEnvio: "",
      alto: "",
      ancho: "",
      peso: "",
      origen: {
        dni: "",
        nombre: "",
        apellidos: "",
        localizacion: undefined,
      },
      destino: {
        dni: "",
        nombre: "",
        apellidos: "",
        localizacion: undefined,
      },

      precio: null,
      error: "",
      localidades: [
        { text: "Almería", value: "Almería" },
        { text: "Jaén", value: "Jaén" },
      ],
    };
  },
  methods: {
    redireccion() {
      router.push("/ujapack/crearEnvio/muestraCreaEnvio");
    },
    async getIdPrecio() {
      const body = {
        alto: parseInt(this.alto),
        ancho: parseInt(this.ancho),
        peso: parseInt(this.peso),
        origen: {
          dni: this.origen.dni,
          nombre: this.origen.nombre,
          apellidos: this.origen.apellidos,
          localizacion: this.origen.localizacion,
        },
        destino: {
          dni: this.destino.dni,
          nombre: this.destino.nombre,
          apellidos: this.destino.apellidos,
          localizacion: this.destino.localizacion,
        },
      };
 try {
        const baseURL = `http://localhost:8080/ujapack/envio`;
        let response = await fetch(baseURL,{
          method: 'POST',
          body: JSON.stringify(body)
        });
        const envio = await response.json();
        console.log(envio);
      
      } catch (err) {
        this.error = "No se ha podido crear el envío";
        console.error(err);
      }
    },
  },
};
</script>
