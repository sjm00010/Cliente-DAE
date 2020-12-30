<template>
<div class="container my-3">
    <mdb-alert color="danger" v-show="error">
        {{this.errorText}}
    </mdb-alert>
    <mdb-jumbotron class="mb-0">
        <p class="lead">Busca el envío ha actualizar.</p>
        <mdb-input type="number" :min="1000000000" :max="9999999999" label="ID del envío" icon="cube" v-model="id"/>
        <mdb-row class="justify-content-md-center">
            <mdb-col md="auto" col="12">
                <mdb-btn color="primary" size="lg" @click="getEnvio">Buscar</mdb-btn>
            </mdb-col>
        </mdb-row>
    </mdb-jumbotron>
    <actualizar class="my-3" v-if="puntos != null" :id="id" :datos="puntos"/>
</div>
</template>

<script>
import actualizar from '@/components/actualizar';
import { mdbJumbotron, mdbBtn, mdbInput, mdbRow, mdbCol, mdbAlert } from 'mdbvue';
export default {
    name: 'buscar',
    components: {
        mdbJumbotron, mdbBtn, mdbInput, mdbRow, mdbCol, mdbAlert,
        actualizar
    },
    data(){
        return{
            id: undefined,
            error: false,
            errorText: '',
            puntos: null
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
                    const baseURL = `https://localhost:8080/ujapack/envio/${this.id.trim()}/puntoControl`;
                    const response = await fetch(baseURL);
                    if(response.ok){
                        this.puntos = await response.json();
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
    }
}
</script>