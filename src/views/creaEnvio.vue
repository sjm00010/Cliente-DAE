<template>
<div class="container my-3">
    <mdb-alert color="danger" v-show="error != ''">
        {{this.error}}
    </mdb-alert>
    <form class="card card-body">
        <p class="h4 text-center mb-4 card-title">Creación de envío</p>
        <p class="text-center mb-4 card-text">Rellene los datos del formulario para crear el envío.</p>
        <div class="ml-3 grey-text">
            <mdb-input v-model="alto" label="Alto del paquete" icon="arrows-alt-v" type="number"/>
            <mdb-input v-model="ancho" label="Ancho del paquete" icon="arrows-alt-h" type="number"/>
            <mdb-input v-model="peso" label="Peso del paquete" icon="weight" type="number"/>
            <blockquote class="container blockquote bq-primary">
                <!--Fila dni-->
                <div class="row d-flex flex-row justify-content-around">
                    <div class="col">
                        <mdb-input v-model="origen.dni" label="DNI del remitente" icon="id-card" type="text" />
                    </div>
                    <div class="col">
                        <mdb-input v-model="destino.dni" label="DNI del destinatario" icon="id-card" type="text" />
                    </div>
                </div>
                <!--Fila nombre-->
                <div class="row d-flex flex-row justify-content-around">
                    <div class="col">
                        <mdb-input v-model="origen.nombre" label="Nombre del remitente" icon="user" type="text" />
                    </div>
                    <div class="col">
                        <mdb-input v-model="destino.nombre" label="Nombre del destinatario" icon="user" type="text" />
                    </div>
                </div>
                <!--Fila apellidos-->
                <div class="row d-flex flex-row justify-content-around">
                    <div class="col">
                        <mdb-input v-model="origen.apellidos" label="Apellidos del remitente" icon="user" type="text" />
                    </div>
                    <div class="col">
                        <mdb-input v-model="destino.apellidos" label="Apellidos del destinatario" icon="user" type="text" />
                    </div>
                </div>
                <!--Fila localización-->
                <div class="row d-flex flex-row justify-content-around">
                    <div class="col">
                        <select class="browser-default custom-select" v-model="origen.localizacion" icon="map-marker-alt" >
                            <option value="undefined" selected disabled>
                                Elige localización del remitente
                            </option>
                            <option v-for="(option, index) in localidades" v-bind:key="index" v-bind:value="option.value">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>

                    <div class="col">
                        <select class="col browser-default custom-select" v-model="destino.localizacion" icon="map-marker-alt">
                            <option value="undefined" selected disabled>
                                Elige localización del destinatario
                            </option>
                            <option v-for="(option, index) in localidades" v-bind:key="index" v-bind:value="option.value">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>
                </div>
            </blockquote>

            <div class="text-center">
                <mdb-btn icon="plus fa-lg" @click="getIdPrecio()" color="success">Crear</mdb-btn>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import { mdbInput, mdbBtn, mdbAlert } from "mdbvue";
import router from "@/router";
import { setCreado } from '@/assets/comunicacion.js';
export default {
  name: "creaenvio",
  components: {
    mdbInput,
    mdbBtn,
    mdbAlert
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
      error: '',
      localidades: [
        { text: "Almería", value: "Almería" },
        { text: "Cádiz", value: "Cádiz" },
        { text: "Córdoba", value: "Córdoba" },
        { text: "Granada", value: "Granada" },
        { text: "Jaén", value: "Jaén" },
        { text: "Málaga", value: "Málaga" },
        { text: "Sevilla", value: "Sevilla" },
        { text: "Badajoz", value: "Badajoz" },
        { text: "Cáceres", value: "Cáceres" },
        { text: "Melilla", value: "Melilla" },
        { text: "Albacete", value: "Albacete" },
        { text: "Ciudad Real", value: "Ciudad Real" },
        { text: "Cuenca", value: "Cuenca" },
        { text: "Guadalajara", value: "Guadalajara" },
        { text: "Toledo", value: "Toledo" },
        { text: "Castellón", value: "Castellón" },
        { text: "Valencia", value: "Valencia" },
        { text: "Alicante", value: "Alicante" },
        { text: "Islas Baleares", value: "Islas Baleares" },
        { text: "León", value: "León" },
        { text: "Zamora", value: "Zamora" },
        { text: "Salamanca", value: "Salamanca" },
        { text: "Palencia", value: "Palencia" },
        { text: "Valladolid", value: "Valladolid" },
        { text: "Avila", value: "Avila" },
        { text: "Burgos", value: "Burgos" },
        { text: "Segovia", value: "Segovia" },
        { text: "Soria", value: "Soria" },
        { text: "La Rioja", value: "La Rioja" },
        { text: "Lleida", value: "Lleida" },
        { text: "Girona", value: "Girona" },
        { text: "Barcelona", value: "Barcelona" },
        { text: "Tarragona", value: "Tarragona" },
        { text: "Zaragoza", value: "Zaragoza" },
        { text: "Huesca", value: "Huesca" },
        { text: "Navarra", value: "Navarra" },
        { text: "Teruel", value: "Teruel" },
        { text: "Vizcaya", value: "Vizcaya" },
        { text: "Alava", value: "Alava" },
        { text: "San Sebastián", value: "San Sebastián" },
        { text: "Cantabria", value: "Cantabria" },
        { text: "La Coruña", value: "La Coruña" },
        { text: "Lugo", value: "Lugo" },
        { text: "Orense", value: "Orense" },
        { text: "Pontevedra", value: "Pontevedra" },
        { text: "Asturias", value: "Asturias" },
        { text: "Madrid", value: "Madrid" },
        { text: "Santa Cruz de Tenerife", value: "Santa Cruz de Tenerife" },
        { text: "Las Palmas", value: "Las Palmas" },
      ],
    };
  },
  methods: {
    async getIdPrecio() {
      this.error = '';
      this.idEnvio = "";
      this.precio = null;
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
        const baseURL = `https://localhost:8080/ujapack/envio`;
        let response = await fetch(baseURL, {
          method: "POST",
          headers: new Headers({
            Authorization: "Basic " + btoa("admin:admin"),
            "Content-Type": "application/json",
          }),
          body: JSON.stringify(body),
        });
        if (response.ok) {
            const envio = await response.json();
            setCreado(envio);
            router.push("/");
        } else {
          this.error = "ERROR : No se ha podido crear el envío";
        }
      } catch (err) {
          this.error = "ERROR : No se ha podido crear el envío";
      }
    },
  },
};
</script>
