<template>
<div class="container my-3">
    <mdb-alert color="danger" v-show="error">
        {{this.errorText}}
    </mdb-alert>
    <mdb-jumbotron class="mb-0">
        <h1 class="display-4">¡Bienvenido a UjaPack! <mdb-icon icon="truck"/></h1>
        <p class="lead">Gracias por confiar en nosotros.</p>
        <hr class="my-4" />
        <p>Busca tu envío...</p>
        <mdb-input type="number" :min="1000000000" :max="9999999999" label="ID del envío" icon="cube" v-model="id"/>
        <mdb-row class="justify-content-md-center">
            <mdb-col md="auto" col="12">
                <mdb-btn color="primary" size="lg" @click="getEnvio">Buscar</mdb-btn>
            </mdb-col>
        </mdb-row>
    </mdb-jumbotron>

    <situacion v-if="situacion != null" :id="id" :datos="situacion" class="my-3" />
    <creacion v-if="creacion != null" :datos="creacion" class="my-3" />
</div>
</template>

<script>
import { mdbJumbotron, mdbBtn, mdbIcon, mdbInput, mdbRow, mdbCol, mdbAlert } from 'mdbvue';
import {setEnvio, envioCreado} from '@/assets/comunicacion.js';
import situacion from '@/components/situacion';
import creacion from '@/components/creacion';
export default {
    name: 'buscar',
    components: {
        mdbJumbotron, mdbBtn, mdbIcon, mdbInput, mdbRow, mdbCol, mdbAlert,
        situacion, creacion
    },
    data(){
        return{
            id: undefined,
            error: false,
            errorText: '',
            situacion: null,
            creacion: null
        };
    },
    methods: {
        async getEnvio() {
            try{
                if(this.id == undefined){
                    this.errorText = 'ERROR : El ID proporcionado no es válido.';
                    this.error = true;
                }else{
                    this.error = false;
                    const baseURL = `https://localhost:8080/ujapack/envio/${this.id.trim()}/situacion`;
                    const response = await fetch(baseURL);
                    if(response.ok){
                        this.situacion = await response.json();
                        setEnvio(this.id);
                    }
                    else{
                        this.errorText = 'ERROR : El ID proporcionado no es válido.';
                        this.error = true;
                    }
                }
            }catch{
                this.errorText = 'ERROR : Se ha producido un error al conectar con el API.';
                this.error = true;
            }
        }
    },
    created(){
        setTimeout(() => {  this.creacion = envioCreado; }, 1000);
    }
}
</script>