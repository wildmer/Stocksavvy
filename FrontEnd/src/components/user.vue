<template>
  <div class="q-pa-md">

    <q-table title="Usuarios" :rows="rows" :columns="columns" row-key="name">
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
  <q-btn color="white" text-color="black" label="Nuevo Usuario" @click="add()"
    class="q-ma-md q-mb-lg q-mt-xl q-ml-auto q-mr-auto q-col-xs-12 q-col-sm-6 q-col-md-4 q-col-lg-3" />
  <div>
    <br />
  </div>

  <q-dialog v-model="modal" persistent transition-show="scale" transition-hide="scale">
    <q-card class="bg-teal text-dark" style="width: 500px; max-width: 80vw">
      <q-card-section style="background-color: rgb(14, 224, 14)">
        <div align="center" class="text-h6">
          {{ bd === 0 ? "Guardar Usuario" : "Editar Usuario" }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">

        <p>Nombre</p>
        <input type="text" v-model="name" class="form-input" />

        <p>Tipo de Documento</p>
        <input type="text" v-model="tpdocument" class="form-input" />

        <p>Número de documento</p>
        <input type="text" v-model="ndocument" class="form-input" />

        <p>Correo</p>
        <input type="text" v-model="email" class="form-input" />

        <p>Contraseña</p>
        <input type="text" v-model="password" class="form-input" />

        <p>Rol</p>
        <input type="text" v-model="role" class="form-input" />

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
import { useUserStore } from '../stores/user.js'

const useUser = useUserStore();
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
  { name: 'tpdocument', align: 'center', label: 'Tipo de documento', field: 'tpdocument', sortable: true },
  { name: 'ndocument', label: 'Número de documento', field: 'ndocument', sortable: true },
  { name: 'email', label: 'Correo', field: 'email' },
  // { name: 'password', label: 'Contraseña', field: 'password' },
  { name: 'role', label: 'Role', field: 'role' },
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
let tpdocument = ref('')
let ndocument = ref('')
let email = ref('')
let password = ref('')
let role = ref('')

async function getUser() {

  // useUser.createToken(useUser.token)
  const res = await useUser.getUsers()
  rows.value = res

}

getUser();


function clean() {
  name.value = ''
  tpdocument.value = ''
  ndocument.value = ''
  email.value = ''
  password.value = ''
  role.value = ''
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
  tpdocument.value = row.tpdocument
  ndocument.value = row.ndocument
  email.value = row.email
  password.value = row.password
  role.value = row.role
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
  else if (tpdocument.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Un tipo de documento valido",
      position: "top",
    });
    return;
  }
  else if (ndocument.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Un nuemro de documento valido",
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
  else if (password.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Una contraseña valida",
      position: "top",
    });
    return;
  }
  else if (role.value === "") {
    q.notify({
      type: "negative",
      message: "Por Favor Ingrese Un rol valido",
      position: "top",
    });
    return;
  }
  let data = {
    "name": name.value,
    "tpdocument": tpdocument.value,
    "ndocument": ndocument.value,
    "email": email.value,
    "password": password.value,
    "role": role.value,
  }
  if (bd.value == 0) {
    await useUser.addUser(data)
    clean()
    modal.value = false
  } else if (bd.value == 1) {
    await useUser.editUser(id, data)
    modal.value = false
    // clean()
  }
  getUser()
}

async function active(row) {
  loading.value = true;
  await useUser.activeUser(row._id)
  loading.value = false;
  getUser()
}

async function inactive(row) {
  loading.value = true;
  await useUser.inactiveUser(row._id)
  loading.value = false;
  getUser()
}

</script>

