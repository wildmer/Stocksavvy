import { defineStore } from "pinia";
// import axios from "axios";
import { api } from "../../boot/axios.js"


// import { login } from "../../api/users.api";
export const useBusinessStore = defineStore("business", {
    state: () => ({
        userData: ":)",
        token: null,
    }),
    
  persist: true,



    actions: {

        createToken(token) {
            this.token = token;
        },

        async getBusiness() {
            try {
                // console.log(this.token);
                const resp = await api.get('/api/business', {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp.data.business

            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addBusiness(datos) {
            console.log('datos' + datos);
            console.log(JSON.stringify(datos))
            try {
                const resp = await api.post('/api/business/register',
                    datos, {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                }
                )
                return resp

            } catch (error) {
                console.log(error)
                return error
            }
        },
        async editBusiness(id, datos) {
            try {
                console.log(datos);
                const resp = await api.put(`/api/business/update/${id}`,
                    datos, {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                }
                )
                return resp

            } catch (error) {
                console.log(error);
                return error
            }

        },
        async activeBusiness(id) {
            try {
                const resp = await api.put(`/api/business/active/${id}`, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                })
                return resp


            } catch (error) {
                console.log(error);
                return error
            }

        },
        async inactiveBusiness(id) {
            try {
                const resp = await api.put(`/api/business/inactive/${id}`, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                })
                return resp

            } catch (error) {
                console.log(error);
                return error
            }

        }

    },

});