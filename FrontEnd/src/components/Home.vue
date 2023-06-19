<template>
  <div class="q-pa-md fullscreen">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 100%"
      class="todo rounded-borders"
    >
      <q-header class="bg-grey-3 text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <q-avatar class="imgg">
              <img
                src="https://3.bp.blogspot.com/-N15hLdeFmso/Ws09d3hwbwI/AAAAAAAAApM/-rAuDQHp518qlUeXmO_-tt3kmhAfCL1SwCK4BGAYYCw/s1600/1024px-Sena_Colombia_logo.svg.png"
              />
            </q-avatar>

            <q-avatar class="imggh">
              <img
                src="https://i.ibb.co/273xPKP/Logo.jpg"
                style="font-size: xx-large"
              />
            </q-avatar>

            <router-link to="/">
              <q-btn class="iconi" flat round dense icon="logout" />
            </router-link>
            <q-tabs
              no-caps
              active-color="primary"
              indicator-color="transparent"
              class="conbot text-grey-8"
              v-model="tab"
            >
              <router-link to="/Home">
                <q-tab
                  name="Home"
                  label="Home"
                  style="color: black"
                  class="home"
                />
              </router-link>

              <q-tab
                name="Movimientos"
                style="color: black"
                label="Movimientos ▽"
              >
                <q-menu>
                  <q-list dense>
                    <router-link to="/Movimientos">
                      <q-item clickable>
                        <q-item-label>Reintegros</q-item-label>
                      </q-item></router-link
                    >
                    <q-item clickable>
                      <q-item-label>Option 2</q-item-label>
                    </q-item>
                    <q-item clickable>
                      <q-item-label>Option 3</q-item-label>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-tab>

              <q-tab
                name="Mantenimiento"
                style="color: black"
                label="Mantenimiento ▽"
              >
                <q-menu>
                  <q-list dense>
                    <q-item clickable>
                      <q-item-label>Option 1</q-item-label>
                    </q-item>
                    <q-item clickable>
                      <q-item-label>Option 2</q-item-label>
                    </q-item>
                    <q-item clickable>
                      <q-item-label>Option 3</q-item-label>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-tab>

              <q-tab name="Reportes" style="color: black" label="Reportes ▽">
                <q-menu>
                  <q-list dense>
                    <q-item clickable>
                      <q-item-label>Option 1</q-item-label>
                    </q-item>
                    <q-item clickable>
                      <q-item-label>Option 2</q-item-label>
                    </q-item>
                    <q-item clickable>
                      <q-item-label>Option 3</q-item-label>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-tab>

              <q-tab
                name="Inventario"
                style="color: black"
                label="Inventario ▽"
              >
                <q-menu>
                  <q-list dense>
                    <q-item clickable>
                      <q-item-label>Option 1</q-item-label>
                    </q-item>
                    <q-item clickable>
                      <q-item-label>Option 2</q-item-label>
                    </q-item>
                    <q-item clickable>
                      <q-item-label>Option 3</q-item-label>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-tab>
            </q-tabs>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <center>
            <div class="image-container"></div>
          </center>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("images"),
    };
  },
};
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
</style>
