import { defineStore } from "pinia";
// import axios from "axios";
import {api} from "../../boot/axios.js"
// import { login } from "../../api/users.api";
export const useRefundsStore = defineStore("refunds", {
    state: () => ({
        userData: ":)",
        token: null,
    }),


    actions: {

        createToken(token) {
            this.token = token;
        },

        async getRefunds() {
            try {
                const resp = await api.get('/api/refunds', {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp.data.refunds

            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addRefunds(datos) {
            console.log('datos' + datos);
            console.log(JSON.stringify(datos))
            try {
                const resp = await api.post('/api/refunds/register',
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
        async editRefunds(id, datos) {
            try {
                console.log(datos);
                const resp = await api.put(`/api/refunds/update/${id}`,
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
        async activeRefunds(id) {
            try {
                const resp = await api.put(`/api/refunds/active/${id}`, {
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
        async inactiveRefunds(id) {
            try {
                const resp = await api.put(`/api/refunds/inactive/${id}`, {
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