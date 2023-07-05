import { defineStore } from "pinia";
// import axios from "axios";
import {api} from "../../boot/axios.js"
// import { login } from "../../api/users.api";
export const useEntriesStore = defineStore("entries", {
    state: () => ({
        userData: ":)",
        token: null,
    }),


    actions: {

        createToken(token) {
            this.token = token;
        },

        async getEntries() {
            try {
                const resp = await api.get('/api/entries', {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp.data.entries

            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addEntries(datos) {
            console.log('datos' + datos);
            console.log(JSON.stringify(datos))
            try {
                const resp = await api.post('/api/entries/register',
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
        async editEntries(id, datos) {
            try {
                console.log(datos);
                const resp = await api.put(`/api/entries/update/${id}`,
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
        async activeEntries(id) {
            try {
                const resp = await api.put(`/api/entries/active/${id}`, {
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
        async inactiveEntries(id) {
            try {
                const resp = await api.put(`/api/entries/inactive/${id}`, {
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