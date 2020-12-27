<template>
  <!-- Material form register -->
  <form>
    <p class="h4 text-center mb-4">Iniciar sesión como operario</p>
    <div class="grey-text">
      <mdb-input
        v-model="nombre"
        label="Introduce tu usuario"
        icon="user"
        type="text"
      />
      <mdb-input
        v-model="contrasena"
        label="Introduce tu contraseña"
        icon="lock"
        type="password"
      />
    </div>
    <div class="text-center">
      <mdb-btn @click="loguear()" color="primary">Aceptar</mdb-btn>
    </div>
  </form>
  <!-- Material form register -->
</template>

<script> 
import { mdbInput, mdbBtn } from "mdbvue";
import router from "@/router";
export default {
  name: "iniciosesion",
  components: {
    mdbInput,
    mdbBtn,
    

  },
    props: ['url'],
  data() {
    return {
      nombre: "",
      contrasena: "",
    };
  },

  methods: {

    loguear() {
      if (this.nombre == "operario" && this.contrasena == "secret") {
        router.push("/ujapack/actualizarEnvio");
      }
  },
},
}
</script>