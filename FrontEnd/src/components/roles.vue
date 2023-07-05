<template>
  <div class="q-pa-md">



    <q-table title="Categorias" :rows="rows" :columns="columns" row-key="name">
      <template v-slot:body-cell-estado="props" style="opacity: 0">
        <td v-if="props.row.status == 1" style="color: green; text-align: center">
          Activo
        </td>
        <td v-else style="color: rgb(251, 2, 2); text-align: center">
          Inactivo
        </td>
      </template>
      <template v-slot:body-cell-opcion="props" style="opacity: 0">
        <td style="text-align: center">
          <q-btn @click="edit(props.row)" class="">📝</q-btn>

          <q-btn v-if="props.row.status == 1" :loading="loading" :disable="loading"
            :class="{ 'cursor-not-allowed': loading }" @click="inactive(props.row)">
            <span v-if="loading">⏳</span>
            <span v-else>🚫</span>
          </q-btn>
          <q-btn v-else :loading="loading" :disable="loading" :class="{ 'cursor-not-allowed': loading }"
            @click="active(props.row)">
            <span v-if="loading">⏳</span>
            <span v-else>✅</span>
          </q-btn>
        </td>
      </template>
    </q-table>

  </div>
  <q-btn color="white" text-color="black" label="Nueva Categoria" @click="add()"
    class="q-ma-md q-mb-lg q-mt-xl q-ml-auto q-mr-auto q-col-xs-12 q-col-sm-6 q-col-md-4 q-col-lg-3" />
  <div>
    <br />
  </div>

  <q-dialog v-model="modal" persistent transition-show="scale" transition-hide="scale">
    <q-card class="bg-teal text-dark" style="width: 500px; max-width: 80vw">
      <q-card-section style="background-color: rgb(14, 224, 14)">
        <div align="center" class="text-h6">
          {{ bd === 0 ? "Guardar categoria" : "Editar categoria" }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">

        <p>Nombre</p>
        <input type="text" v-model="name" class="form-input" />

        <p>Modulos</p>
        <input type="number" v-model="modules" class="form-input" />

        <p>Permisos</p>
        <input type="number" v-model="permissions" class="form-input" />



        <q-card-actions align="center" class="bg-white text-black">
          <q-btn label="Cancelar" @click="modal = false" style="background-color: rgb(243, 9, 9)" />

          <q-btn @click="save()" style="background-color: rgb(14, 224, 14)">
            {{ bd == 0 ? "Guardar " : "Editar " }}
          </q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
    
<script setup>
import { ref } from 'vue'
import { useRolesStore } from '../stores/roles.js'
import { useUserStore } from '../stores/user.js'
const useUser = useUserStore()

const useRoles = useRolesStore();
// const useUser = useUserStore()

let modal = ref(false)
let loading = ref(false);

// console.log(useUser.token);
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: 'name',
    // field: row => row.name,
    // format: val => `${val}`,
    sortable: true
  },
  { name: 'modules', align: 'center', label: 'Modulos', field: 'modules', sortable: true },
  { name: 'permissions', label: 'Permisos', field: 'permissions', sortable: true },
  {
    name: "opcion",
    label: "Opciones",
    field: "",
    sortable: true,
    align: "center",
  },
]

const rows = ref([])

let bd = ref(0)
let id = null
let name = ref('')
let modules = ref('')
let permissions = ref('')

async function getRoles() {

  useRoles.createToken(useUser.token)
  const res = await useRoles.getRoles()
  rows.value = res

}

getRoles();


function clean() {
  name.value = ''
  modules.value = ''
  permissions.value = ''

}

function add() {
  clean()
  bd.value = 0
  modal.value = true
}

function edit(row) {
  clean()
  modal.value = true
  bd.value = 1
  id = row._id
  name.value = row.name
  modules.value = row.modules
  permissions.value = row.permissions

}

async function save() {
  if (name.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Un nombre valido",
      position: "top",
    });
    return;
  }
  else if (modules.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Un modulo valido",
      position: "top",
    });
    return;
  }
  else if (permissions.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Un permiso valido",
      position: "top",
    });
    return;
  }

  let data = {
    "name": name.value,
    "modules": modules.value,
    "permissions": permissions.value,

  }
  if (bd.value == 0) {
    await useRoles.addRoles(data)
    clean()
    modal.value = false
  } else if (bd.value == 1) {
    await useRoles.editRoles(id, data)
    modal.value = false
    // clean()
  }
  getRoles()
}

async function active(row) {
  loading.value = true;
  await useRoles.activeRoles(row._id)
  loading.value = false;
  getRoles()
}

async function inactive(row) {
  loading.value = true;
  await useRoles.inactiveRoles(row._id)
  loading.value = false;
  getRoles()
}

</script>

