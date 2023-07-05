import Login from "../components/Login.vue";

import Home from "../components/Home.vue";

import Movimientos from "../components/Movimientos.vue";

import Business from '../components/business.vue'

import Categories from '../components/categories.vue'
import Entries from '../components/entries.vue'
import Outs from '../components/outs.vue'
import Products from '../components/products.vue'
import Providers from '../components/providers.vue'
import Refunds from '../components/refunds.vue'
import Roles from '../components/roles.vue'
import Unitmeasurements from '../components/unitmeasurements.vue'
import User from '../components/user.vue'

import Template from '../components/Template.vue'

export const routes = [
  { path: "/", component: Login },
  { path: "/", component: Template, children: [
    { path: "/Home", component: Home },

    { path: "/Movimientos", component: Movimientos },
  
    { path: "/Business", component: Business },
    { path: "/Categories", component: Categories },
    { path: "/Entries", component: Entries },
    { path: "/Outs", component: Outs },
    { path: "/Products", component: Products },
    { path: "/Providers", component: Providers },
    { path: "/Refunds", component: Refunds },
    { path: "/Roles", component: Roles },
    { path: "/Unitmeasurements", component: Unitmeasurements },
    { path: "/User", component: User },
  ] },



];
