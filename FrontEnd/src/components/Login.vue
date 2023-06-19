<template>
  <div style="height: 100vh">
    <div class="Login mitad-derecha">
      <center>
        <h1>Iniciar Sesion</h1>
        <em>Inicia Sesion para Continuar</em>
      </center>
      <hr style="color: black" />
      <br />
      <br />
      <br />
      <q-input
        square
        filled
        class="my-btn"
        v-model="text"
        label="Correo Electronico"
      />
      <br />
      <q-input
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        label="Contraseña"
        class="my-btn"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <br />
      <div class="button-container">
        <router-link to="/Home">
          <q-btn :ripple="{ center: true }" color="dark" label="Entrar" no-caps
        /></router-link>
      </div>
    </div>
    <div class="mitad-izquierda">
      <div class="image-container"></div>
      <div>
        <q-avatar class="imgg">
          <img
            src="https://3.bp.blogspot.com/-N15hLdeFmso/Ws09d3hwbwI/AAAAAAAAApM/-rAuDQHp518qlUeXmO_-tt3kmhAfCL1SwCK4BGAYYCw/s1600/1024px-Sena_Colombia_logo.svg.png"
          />
        </q-avatar>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      password: ref(""),
      email: ref(""),
      isPwd: ref(true),
      isDisabled: true,
    };
  },
};
</script>

<style scoped>
.mitad-izquierda {
  float: left;
  width: 50%;
  height: 100%;
}

.image-container {
  position: relative; /* Añadir position: relative */
}

.imgg {
  position: absolute;
  left: 14px; /* Ajustar la posición según tu preferencia */
  top: 14px; /* Ajustar la posición según tu preferencia */
  z-index: 999;
}
.mitad-derecha {
  float: right;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #968ef5;
}

.image-container {
  width: 100%;
  height: 100vh;
  background-image: url("https://i.ibb.co/273xPKP/Logo.jpg");
  background-size: cover;
  background-position: center;
}

.my-btn {
  max-width: 500px;
  min-width: 500px;
  margin: 0 auto;
}

.button-container {
  display: flex;
  justify-content: center;
}

.linea:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 1px;
  background-color: black;
}
</style>
