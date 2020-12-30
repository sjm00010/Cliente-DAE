<template>
<div>
    <mdb-jumbotron class="mb-0 text-center hoverable p-4">
        <mdb-row>
            <mdb-col md="7" class="text-left ml-3 mt-3">
                <h6 class="h6 pb-1 cyan-text"><mdb-icon far icon="question-circle" class="pr-1"/> Info</h6>
                <h3 class="h3 mb-4">Último envio creado</h3>
                <p class="lead">
                    <ul>
                        <li>
                            <b>ID</b>: {{this.datos.identificador}}
                        </li>
                        <li>
                            <b>Precio</b>: {{this.datos.precio}} €
                        </li>
                    </ul>
                </p>
            </mdb-col>
            <mdb-col md="4" offsetMd="1" class="m-3">
                <mdb-view src="https://www.flaticon.es/svg/static/icons/svg/647/647084.svg" alt="Icono ruta">
                    <mdb-mask waves overlay="white-slight"/>
                </mdb-view>
            </mdb-col>
        </mdb-row>
    </mdb-jumbotron>
</div>
</template>

<script>
import { mdbJumbotron, mdbRow, mdbCol, mdbMask, mdbView, mdbIcon } from 'mdbvue';
export default {
    name: 'envioCreado',
    components: {
        mdbJumbotron, mdbRow, mdbCol, mdbMask, mdbView, mdbIcon
    },
    props:{
        datos: {
            type: Object, 
            required: true
        }
    }
}
</script>