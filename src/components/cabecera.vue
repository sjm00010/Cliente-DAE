<template>
    <mdb-navbar expand="large" dark color="stylish">
        <mdb-navbar-brand router-link to="/">
            <img :src="require('@/assets/logo.png')" height="70px">
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav right>
                <mdb-nav-item class="text-center" router-link to="/inicioSesion" @click.native="setTipo(true)">
                    <mdb-icon icon="plus" /> Crear envío
                </mdb-nav-item>
                <mdb-nav-item class="text-center" router-link to="/inicioSesion" @click.native="setTipo(false)">
                    <mdb-icon icon="arrow-alt-circle-up" /> Actualizar envío
                </mdb-nav-item>
            </mdb-navbar-nav>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script>
import {setTipo} from '@/assets/comunicacion.js';
import {   mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbIcon } from 'mdbvue';
export default {
    name: 'Cabecera',
    components: {
        mdbNavbar,
        mdbNavbarBrand,
        mdbNavbarToggler,
        mdbNavbarNav,
        mdbNavItem,
        mdbIcon
    },
    methods:{
        setTipo(tipo){
            setTipo(tipo);
        }
    }
}
</script>