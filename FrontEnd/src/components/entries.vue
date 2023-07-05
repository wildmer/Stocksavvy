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

        <p>Direccion</p>
        <input type="text" v-model="address" class="form-input" />

        <p>Telefono</p>
        <input type="text" v-model="phone" class="form-input" />

        <p>Correo</p>
        <input type="text" v-model="email" class="form-input" />


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
import { useEntriesStore } from '../stores/entries.js'
import { useUserStore } from '../stores/user.js'
const useUser = useUserStore()

const useEntries = useEntriesStore();
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
  { name: 'address', align: 'center', label: 'Direccion', field: 'address', sortable: true },
  { name: 'phone', label: 'Telefono', field: 'phone', sortable: true },
  { name: 'email', label: 'Correo', field: 'email' },
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
let address = ref('')
let phone = ref('')
let email = ref('')

async function getEntries() {

  useEntries.createToken(useUser.token)
  const res = await useEntries.getEntries()
  rows.value = res

}

getEntries();


function clean() {
  name.value = ''
  address.value = ''
  phone.value = ''
  email.value = ''
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
  address.value = row.address
  phone.value = row.phone
  email.value = row.email
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
  else if (address.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Un direccion valida",
      position: "top",
    });
    return;
  }
  else if (phone.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Un telefono valido",
      position: "top",
    });
    return;
  }
  else if (email.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Un correo valido",
      position: "top",
    });
    return;
  }
  let data = {
    "name": name.value,
    "address": address.value,
    "phone": phone.value,
    "email": email.value,
  }
  if (bd.value == 0) {
    await useEntries.addEntries(data)
    clean()
    modal.value = false
  } else if (bd.value == 1) {
    await useEntries.editEntries(id, data)
    modal.value = false
    // clean()
  }
  getEntries()
}

async function active(row) {
  loading.value = true;
  await useEntries.activeEntries(row._id)
  loading.value = false;
  getEntries()
}

async function inactive(row) {
  loading.value = true;
  await useEntries.inactiveEntries(row._id)
  loading.value = false;
  getEntries()
}

</script>
    