import { api } from "../boot/axios";


export const getUsers = async () =>{
    try {
        const resp =await api.get('/usuario') 

        console.log(resp.data);

    } catch (error) {
        
    }
}

export const setUsers = async (data) =>{
    //nombre,correo,contrasena,rol,estado
    const user ={
        nombre: "User",
        correo: "pepitoperez@gmail.com",
        contraseña: "123456",
        rol:"Admin",
        estado: 1,
    }

    try {
        const resp =await api.post('/usuario',data)
        console.log(resp.data)

    }catch(e)
    {}
}

export const login = async () =>{
    const user = {
        correo: "raulyesidv@gmail.com",
        contrasena: "123456"
    };

    try {
        const resp =await api.post('/usuario/login',user)
        
        console.log(resp.data)
        
    } catch (error) {
        
    }

    }