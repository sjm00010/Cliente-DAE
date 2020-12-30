<template>
<div>
    <mdb-alert color="danger" v-show="error != ''">
        {{this.error}}
    </mdb-alert>
    <select class="browser-default custom-select" v-model="tipo" icon="map-marker-alt" >
        <option value="normal">
            Actualización de un punto de ruta
        </option>
        <option value="entrega">
            Actualizacion de la entrega
        </option>
    </select>
    <mdb-card v-show="tipo == 'normal'" class="my-3">
        <mdb-card-body>
            <mdb-card-title>Selecciona un punto de contro e indica si es de entrada o salida</mdb-card-title>
            <mdb-row>
                <mdb-col md="8">
                    <select class="browser-default custom-select" v-model="idPc" icon="map-marker-alt" >
                        <option value="" selected disabled>
                            Elige un punto de control
                        </option>
                        <option v-for="(option, index) in puntos" v-bind:key="index" v-bind:value="option">
                            {{ option }}
                        </option>
                    </select>
                </mdb-col>
                <mdb-col md="4">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitches" v-model="isSalida">
                        <label class="custom-control-label" for="customSwitches">Entrada/Salida</label>
                    </div>
                </mdb-col>
            </mdb-row>
        </mdb-card-body>
    </mdb-card>
    <mdb-btn block icon="arrow-alt-circle-up fa-lg" @click="actualizar" color="default">Actualizar</mdb-btn>
</div>
</template>

<script>
import router from "@/router";
import { mdbBtn, mdbCard, mdbCardBody, mdbCardTitle, mdbRow, mdbCol, mdbAlert } from "mdbvue";
export default {
    name: 'actualizar',
    components: {
        mdbBtn, mdbCard, mdbCardBody, mdbCardTitle, mdbRow, mdbCol, mdbAlert
    },
    props:{
        id:{
            required: true
        },
        datos: { 
            required: true
        }
    },
    data(){
        return{
            error: '',
            tipo: 'normal',
            isSalida: false,
            idPc: '',
            puntos: new Set()
        };
    },
    methods:{
        async actualizar() {
            this.error="";

            try {
                let baseURL;
                if(this.tipo == 'normal')
                    baseURL = `https://localhost:8080/ujapack/envio/${this.id.trim()}/puntoControl/${this.idPc}?isSalida=${this.isSalida}`;
                else
                    baseURL = `https://localhost:8080/ujapack/envio/${this.id.trim()}`;
                let response = await fetch(baseURL,{
                    method: "PUT",
                    headers: new Headers({
                        Authorization: "Basic " + btoa("operario:secret"),
                    }),
                });
                if(!response.ok){
                    this.error = "No se ha podido actualizar el envío";
                } else {
                    router.push("/");
                }
            } catch (err) {
                this.error = err;
            }
        }
    },
    created(){
        this.datos.forEach(element => {
            this.puntos.add(element.idPuntoControl);
        });
    }
}
</script>