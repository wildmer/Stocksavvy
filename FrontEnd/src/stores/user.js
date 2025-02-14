import { defineStore } from "pinia";
// import axios from "axios";
import { api } from "../../boot/axios.js"


// import { login } from "../../api/users.api";
export const useUserStore = defineStore("user", {
    state: () => ({
        userData: ":)",
        token: null,
    }),

    persist: true,



    actions: {

        createToken(token) {
            this.token = token;
        },

        async getUsers() {
            try {
                // console.log(this.token);
                const resp = await api.get('/api/user', {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': this.token
                    }
                });
                return resp.data.users

            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addUser(datos) {
            console.log('datos' + datos);
            console.log(JSON.stringify(datos))
            try {
                const resp = await api.post('/api/user/register',
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
        async editUser(id, datos) {
            try {
                console.log(datos);
                const resp = await api.put(`/api/user/update/${id}`,
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
        async activeUser(id) {
            try {
                const resp = await api.put(`/api/user/active/${id}`, {}, {
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
        async inactiveUser(id) {
            try {
                const resp = await api.put(`/api/user/inactive/${id}`, {}, {
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
        async login(datos) {
            // console.log(JSON.stringify(datos))

            // try {
            const resp = await api.post(`api/user/login`, datos)
            this.token = resp.data.token;
            return resp

            // } catch (error) {
            //     console.log(error);
            //     return error
            // }

        }

    },

});