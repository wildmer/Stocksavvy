import axios from "axios";

const api = axios.create({
    baseURL: "https://softwaretrapiche.onrender.com",
    // baseURL: "http://localhost:4000/",
    validateStatus: function (status) {
        return true;
    },

},);
// const api = axios.create({ baseURL: "https://softwaretrapiche.onrender.com" });

// api.interceptors.response.use(
//     (response) => {
//         if (response.status >= 200 && response.status < 500) {
//             return response;
//         } else {
//             Promise.reject();
//         }
//     },
//     (error) => {
//         console.log(error);
//         return Promise.reject();
//     }
// );
export { api };
