<template>
    <mdb-navbar expand="large" dark color="stylish">
        <mdb-navbar-brand router-link to="/ujapack" >
            <img :src="require('@/assets/logo.png')" height="50px">
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav right>
                <mdb-nav-item class="text-center" router-link to="/ujapack">
                    <mdb-icon icon="home" /> Inicio
                </mdb-nav-item>
                <mdb-nav-item class="text-center" router-link to="/ujapack/iniciarsesion" >
                    <mdb-icon icon="plus" /> Crear Envío
                </mdb-nav-item>
                <mdb-nav-item class="text-center" router-link to="/ujapack/actualizarEnvio">
                    <mdb-icon icon="shipping-fast" /> Actualizar Envío
                </mdb-nav-item>
            </mdb-navbar-nav>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script>
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
    }
</script>