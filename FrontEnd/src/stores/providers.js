import { defineStore } from "pinia";
// import axios from "axios";
import {api} from "../../boot/axios.js"
// import { login } from "../../api/users.api";
export const useProvidersStore = defineStore("providers", {
    state: () => ({
        userData: ":)",
        token: null,
    }),


    actions: {

        createToken(token) {
            this.token = token;
        },

        async getProviders() {
            try {
                const resp = await api.get('/api/providers', {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp.data.providers

            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addProviders(datos) {
            console.log('datos' + datos);
            console.log(JSON.stringify(datos))
            try {
                const resp = await api.post('/api/providers/register',
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
        async editProviders(id, datos) {
            try {
                console.log(datos);
                const resp = await api.put(`/api/providers/update/${id}`,
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
        async activeProviders(id) {
            try {
                const resp = await api.put(`/api/providers/active/${id}`, {
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
        async inactiveProviders(id) {
            try {
                const resp = await api.put(`/api/providers/inactive/${id}`, {
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