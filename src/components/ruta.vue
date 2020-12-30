<template>
<div>
    <mdb-alert color="danger" v-show="error">
        {{this.errorText}}
    </mdb-alert>
    <mdb-jumbotron class="mb-0 text-center hoverable p-4">
        <mdb-row>
            <mdb-col md="7" class="text-left ml-3 mt-3">
                <h6 class="h6 pb-1 cyan-text"><mdb-icon far icon="question-circle" class="pr-1"/> Ruta</h6>
                <h3 class="h3 mb-4">Ruta del envio {{this.id}}</h3>
                <p class="font-weight-normal"> Los puntos de control se muestran en el formato : <br/> Entrada/Salida -- ID del punto de control -- Hora</p>
                <p class="lead">
                    <ul v-for="(punto, i) in ruta" :key="i">
                        <li v-if="punto.fecha != null">
                            <b v-if="!punto.inOut">Entrada</b><b v-if="punto.inOut">Salida</b> -- {{punto.idPuntoControl}} -- {{visualizaFecha(punto.fecha)}}
                        </li>
                    </ul>
                </p>
            </mdb-col>
            <mdb-col md="4" offsetMd="1" class="m-3">
                <mdb-view src="https://www.flaticon.es/svg/static/icons/svg/3420/3420161.svg" alt="Icono ruta">
                    <mdb-mask waves overlay="white-slight"/>
                </mdb-view>
            </mdb-col>
        </mdb-row>
    </mdb-jumbotron>
</div>
</template>

<script>
import { mdbJumbotron, mdbRow, mdbCol, mdbMask, mdbView, mdbIcon, mdbAlert } from 'mdbvue';
export default {
    name: 'Ruta',
    components: {
        mdbJumbotron, mdbRow, mdbCol, mdbMask, mdbView, mdbIcon, mdbAlert
    },
    props:{
        id: {
            type: String, 
            required: true
        }
    },
    data(){
        return{
            error: false,
            errorText: '',
            ruta: null
        };
    },
    methods: {
        async getRutaEnvio() {
            try{
                this.error = false;
                const baseURL = `https://localhost:8080/ujapack/envio/${this.id}/puntoControl`;
                const response = await fetch(baseURL);
                if(response.ok)
                    this.ruta = await response.json();
                else{
                    this.errorText = 'ERROR : El ID proporcionado no es válido.';
                    this.error = true;
                }
            }catch{
                this.errorText = 'ERROR : Se ha producido un error al conectar con el API.';
                this.error = true;
            }
        },
        visualizaFecha(fecha){
            let nFecha = new Date(fecha);
            return nFecha.toLocaleString();
        }
    },
    created() {
        this.getRutaEnvio();
    }
}
</script>