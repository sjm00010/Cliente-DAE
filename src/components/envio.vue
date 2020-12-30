<template>
<div>
    <mdb-jumbotron class="mb-0 text-center hoverable p-4">
        <mdb-row>
            <mdb-col md="4" offsetMd="1" class="m-3">
            <mdb-view class="animated slideInDown" src="https://www.flaticon.es/svg/static/icons/svg/679/679821.svg" alt="Icono paquete">
                <mdb-mask waves overlay="white-slight"/>
            </mdb-view>
            </mdb-col>
            <mdb-col md="7" class="text-left ml-3 mt-3">
                <h6 class="h6 pb-1 cyan-text"><mdb-icon far icon="question-circle" class="pr-1"/> +Info</h6>
                <h3 class="h3 mb-4">Estado del envio</h3>
                <h5 class="mb-4"><b>Identificador</b> : {{this.datos.id}}</h5>
                <p class="font-weight-normal">
                    <ul>
                        <li>
                            <b>Alto</b>: {{this.datos.alto}} cm
                        </li>
                        <li>
                            <b>Ancho</b>: {{this.datos.ancho}} cm
                        </li>
                        <li>
                            <b>Peso</b>: {{this.datos.peso}} Kg
                        </li>
                        <li>
                            <b>Origen</b>:
                            <ul>
                                <li> 
                                    <i>DNI</i>: {{this.datos.origen.dni}}
                                </li>
                                <li> 
                                    <i>Localización</i>: {{this.datos.origen.localizacion}}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <b>Destino</b>:
                            <ul>
                                <li> 
                                    <i>DNI</i>: {{this.datos.destino.dni}}
                                </li>
                                <li> 
                                    <i>Localización</i>: {{this.datos.destino.localizacion}}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <b>Estado</b>: {{this.datos.estado}}
                        </li>
                        <li>
                            <b>Precio</b>: {{this.datos.precio}} €
                        </li>
                    </ul>
                </p>
            </mdb-col>
        </mdb-row>
    </mdb-jumbotron>

    <ruta class="my-3" :id="datos.id"/>
</div>
</template>

<script>
import ruta from '@/components/ruta';
import { mdbJumbotron, mdbRow, mdbCol, mdbMask, mdbView, mdbIcon } from 'mdbvue';
export default {
    name: 'Envio',
    props:{
        datos: {
            type: Object, 
            required: true
        }
    },
    components: {
        mdbJumbotron, mdbRow, mdbCol, mdbMask, mdbView, mdbIcon,
        ruta
    }
}
</script>