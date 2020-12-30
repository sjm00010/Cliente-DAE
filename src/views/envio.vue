<template>
<div class="container my-3">
    <mdb-alert color="danger" v-show="error">
        {{this.errorText}}
    </mdb-alert>
    <envio v-if="datos != null" :datos="datos" class="my-3"/>
</div>
</template>

<script>
import envio from '@/components/envio';
import {envioActual} from '@/assets/comunicacion.js';
import { mdbAlert } from 'mdbvue';
export default {
    name: 'informacionEnvio',
    components: {
        mdbAlert, envio
    },
    data(){
        return{
            id: undefined,
            error: false,
            errorText: '',
            datos: null
        };
    },
    methods: {
        async getEnvio() {
            console.log(this.id)
            try{
                if(this.id == undefined){
                    this.errorText = 'ERROR : El ID proporcionado no es válido.';
                    this.error = true;
                }else{
                    this.error = false;
                    const baseURL = `https://localhost:8080/ujapack/envio/${this.id.trim()}`;
                    const response = await fetch(baseURL);
                    if(response.ok)
                        this.datos = await response.json();
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
        this.id = envioActual;
        this.getEnvio();
    }
}
</script>