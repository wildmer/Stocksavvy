<template>
  <div class="q-pa-md fullscreen">
    <q-layout view="lHh lpr lFf" container style="height: 100%" class="todo rounded-borders">

      <Header />

      <q-page-container>
        <q-page class="q-pa-md">
          <center>
            <!-- <div class="image-container"></div> -->
            <router-view></router-view>
          </center>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>


<script setup>
import Header from '../components/Header.vue'

</script>

<style scoped>
.home {
  background-color: #968ef5;
}

.image-container {
  width: 90%;
  height: 87vh;
  background-image: url("https://picsum.photos/800/600");
  background-size: cover;
  background-position: center;
  align-items: center;
}

.imgg {
  position: absolute;
  left: 0;
  margin: 14px;
}

.imggh {
  position: absolute;
  margin-left: -589px;
  margin-top: 10px;
}

.iconi {
  position: absolute;
  top: 0;
  right: 10px;
  /* margen derecho */
  margin-top: 10px;
  /* margen superior */
}

@media (max-width: 600px) {

  /* ajustar para pantallas más pequeñas */
  .conbot {
    margin-left: 50px;
    width: 300px;
  }
}

.conbot {
  border: 2px solid;
  border-color: black;
  border-radius: 30px;
  margin-left: 300px;
  width: 700px;
}

.todo {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 1;
  margin: 0;
}

.fullscreen {
  height: 100vh;
}

body,
html {
  height: 100%;
}

@media (max-width: 600px) {
  .q-tab {
    max-width: 100%;
  }
}

.q-pt-none {
  background-color: #ffffff; /* Establecer el color de fondo del cuadro de diálogo */
}

.q-card {
  border-radius: 8px; /* Agregar radio de borde a la tarjeta */
}

.q-card-section {
  padding: 20px; /* Aumentar el relleno de las secciones de la tarjeta. */
}

.q-card-actions {
  justify-content: flex-end; /* Alinear las acciones de la tarjeta a la derecha */
}

.q-btn {
  margin-left: 10px; /* Añade algo de espacio entre los botones. */
}

input[type="text"] {
  width: 100%; /* Hacer que las entradas de texto ocupen todo el ancho */
}

.text-h6 {
  font-size: 1.25rem; /* Aumentar el tamaño de fuente del título de la sección.*/
}
.q-btn:hover {
  background-color: rgb(14, 224, 14);
}

.tabla {
  border: 7px solid transparent;
  border-image: linear-gradient(to right, #00ff00, #000000) 1;
  border-image-slice: 1;
  border-radius: 20px;
}

.form-input {
  margin-bottom: 30px; /* Ajusta el margen inferior entre los campos */
}
</style>
