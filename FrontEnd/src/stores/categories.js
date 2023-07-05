import { defineStore } from "pinia";
// import axios from "axios";
import {api} from "../../boot/axios.js"
// import { login } from "../../api/users.api";
export const useCategoriesStore = defineStore("categories", {
    state: () => ({
        userData: ":)",
        token: null,
    }),


    actions: {

        createToken(token) {
            this.token = token;
        },

        async getCategories() {
            try {
                const resp = await api.get('/api/categories', {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp.data.categories

            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addCategories(datos) {
            console.log('datos' + datos);
            console.log(JSON.stringify(datos))
            try {
                const resp = await api.post('/api/categories/register',
                    datos
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp

            } catch (error) {
                console.log(error)
                return error
            }
        },
        async editCategories(id, datos) {
            try {
                console.log(datos);
                const resp = await api.put(`/api/categories/update/${id}`,
                    datos
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp

            } catch (error) {
                console.log(error);
                return error
            }

        },
        async activeCategories(id) {
            try {
                const resp = await api.put(`/api/categories/active/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp


            } catch (error) {
                console.log(error);
                return error
            }

        },
        async inactiveCategories(id) {
            try {
                const resp = await api.put(`/api/categories/inactive/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp

            } catch (error) {
                console.log(error);
                return error
            }

        }

    },

});