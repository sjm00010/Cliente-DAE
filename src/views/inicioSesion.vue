<template>
<div class="container my-3">
    <mdb-alert color="danger" v-show="error !=''">
        {{this.error}}
    </mdb-alert>
    <mdb-card class="w-responsive mx-auto">
		<mdb-card-body>
			<mdb-card-title>Iniciar sesión para acceder a la opción seleccionada</mdb-card-title>
            <div>
                <mdb-input
                    v-model="nombre"
                    label="Usuario"
                    icon="user"
                    type="text"
                />
                <mdb-input
                    v-model="contrasena"
                    label="Contraseña"
                    icon="lock"
                    type="password"
                />
            </div>
			<mdb-btn block @click="loguear()" color="primary">Iniciar sesión</mdb-btn>
		</mdb-card-body>
	</mdb-card>
</div>
</template>

<script> 
import { mdbInput, mdbBtn, mdbAlert, mdbCard, mdbCardBody, mdbCardTitle } from "mdbvue";
import {admin} from '@/assets/comunicacion.js';
import router from "@/router";
export default {
  name: "iniciosesion",
  components: {
    mdbInput, mdbBtn, mdbAlert, mdbCard, mdbCardBody, mdbCardTitle
  },
  data() {
    return {
      nombre: "",
      contrasena: "",
      error:""
    };
  },

  methods: {
    loguear() {
        if(admin)
            if (this.nombre == "admin" && this.contrasena == "admin")
                router.push("/crearEnvio");
            else
                this.error = "Se ha producido un error, introduce de nuevo las credenciales."
        else
            if (this.nombre == "operario" && this.contrasena == "secret")
                router.push("/actualizarEnvio");
            else
                this.error = "Se ha producido un error, introduce de nuevo las credenciales."
  },
},
}
</script>
