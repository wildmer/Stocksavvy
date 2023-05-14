
import Login from "../components/Login.vue"

import Home from "../components/Home.vue"

import Movimientos from "../components/Movimientos.vue"

export const routes = [
    {path: "/", component:Login},
    
    {path: "/Home", component:Home},

    {path: "/Movimientos", component:Movimientos},

]