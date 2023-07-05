import { defineStore } from "pinia";
// import axios from "axios";
import {api} from "../../boot/axios.js"
// import { login } from "../../api/users.api";
export const useUnitmeasurementsStore = defineStore("unitmeasurements", {
    state: () => ({
        userData: ":)",
        token: null,
    }),


    actions: {

        createToken(token) {
            this.token = token;
        },

        async getUnitmeasurements() {
            try {
                const resp = await api.get('/api/unitmeasurements', {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp.data.unitmeasurements

            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addUnitmeasurements(datos) {
            console.log('datos' + datos);
            console.log(JSON.stringify(datos))
            try {
                const resp = await api.post('/api/unitmeasurements/register',
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
        async editUnitmeasurements(id, datos) {
            try {
                console.log(datos);
                const resp = await api.put(`/api/unitmeasurements/update/${id}`,
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
        async activeUnitmeasurements(id) {
            try {
                const resp = await api.put(`/api/unitmeasurements/active/${id}`, {
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
        async inactiveUnitmeasurements(id) {
            try {
                const resp = await api.put(`/api/unitmeasurements/inactive/${id}`, {
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