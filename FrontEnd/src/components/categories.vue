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

        <p>Descriccion</p>
        <input type="text" v-model="description" class="form-input" />

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
import { useCategoriesStore } from '../stores/categories.js'
import { useUserStore } from '../stores/user.js'
const useUser = useUserStore()

const useCategories = useCategoriesStore();
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
  { name: 'description', align: 'center', label: 'Direccion', field: 'description', sortable: true },

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
let description = ref('')


async function getCategories() {

  useCategories.createToken(useUser.token)
  const res = await useCategories.getCategories()
  rows.value = res

}

getCategories();


function clean() {
  name.value = ''
  description.value = ''
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
  description.value = row.description
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
  else if (description.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Una descriccion valida",
      position: "top",
    });
    return;
  }

  let data = {
    "name": name.value,
    "description": description.value,
  }
  if (bd.value == 0) {
    await useCategories.addCategories(data)
    clean()
    modal.value = false
  } else if (bd.value == 1) {
    await useCategories.editCategories(id, data)
    modal.value = false
    // clean()
  }
  getCategories()
}

async function active(row) {
  loading.value = true;
  await useCategories.activeCategories(row._id)
  loading.value = false;
  getCategories()
}

async function inactive(row) {
  loading.value = true;
  await useCategories.inactiveCategories(row._id)
  loading.value = false;
  getCategories()
}

</script>
    