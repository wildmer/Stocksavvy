<template>
<q-header class="bg-grey-3 text-primary">
    <q-toolbar>
      <q-toolbar-title class="text-center">
        <q-avatar class="imgg">
          <img
            src="https://3.bp.blogspot.com/-N15hLdeFmso/Ws09d3hwbwI/AAAAAAAAApM/-rAuDQHp518qlUeXmO_-tt3kmhAfCL1SwCK4BGAYYCw/s1600/1024px-Sena_Colombia_logo.svg.png" />
        </q-avatar>

        <q-avatar class="imggh">
          <img src="https://i.ibb.co/273xPKP/Logo.jpg" style="font-size: xx-large" />
        </q-avatar>

        <router-link to="/">
          <q-btn class="iconi" flat round dense icon="logout" />
        </router-link>
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="conbot text-grey-8" v-model="tab">
          <router-link to="/Home">
            <q-tab name="Home" label="Home" style="color: black" class="home" />
          </router-link>

          <q-tab name="Movimientos" style="color: black" label="Movimientos ▽">
            <q-menu>
              <q-list dense>
                <router-link to="/Business">
                  <q-item clickable>
                    <q-item-label>Empresas</q-item-label>
                  </q-item>
                </router-link>
                <router-link to="/Categories">
                  <q-item clickable>
                    <q-item-label>Categorias</q-item-label>
                  </q-item>
                </router-link>
                <router-link to="/Entries">
                  <q-item clickable>
                    <q-item-label>Entradas</q-item-label>
                  </q-item>
                </router-link>
                <router-link to="/Outs">
                  <q-item clickable>
                    <q-item-label>Outs</q-item-label>
                  </q-item>
                </router-link>
                <router-link to="/Products">
                  <q-item clickable>
                    <q-item-label>Products</q-item-label>
                  </q-item>
                </router-link>
                <router-link to="/Providers">
                  <q-item clickable>
                    <q-item-label>Proveedores</q-item-label>
                  </q-item>
                </router-link>
                <router-link to="/Refunds">
                  <q-item clickable>
                    <q-item-label>Refunds</q-item-label>
                  </q-item>
                </router-link>
                <router-link to="/Roles">
                  <q-item clickable>
                    <q-item-label>Roles</q-item-label>
                  </q-item>
                </router-link>
                <router-link to="/Unitmeasurements">
                  <q-item clickable>
                    <q-item-label>Unitmeasurements</q-item-label>
                  </q-item>
                </router-link>
                <router-link to="/User">
                  <q-item clickable>
                    <q-item-label>Usuarios</q-item-label>
                  </q-item>
                </router-link>


                <q-item clickable>
                  <q-item-label>Option 2</q-item-label>
                </q-item>
                <q-item clickable>
                  <q-item-label>Option 3</q-item-label>
                </q-item>
              </q-list>
            </q-menu>
          </q-tab>

          <q-tab name="Mantenimiento" style="color: black" label="Mantenimiento ▽">
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

          <q-tab name="Inventario" style="color: black" label="Inventario ▽">
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
</template>

  
<script setup>
import { ref } from "vue";

let tab = ref("images")

</script> 