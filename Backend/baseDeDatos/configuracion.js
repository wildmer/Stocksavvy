import mongoose from "mongoose";


 const conexion =() =>{

    try {
        mongoose.connect(process.env.MONGO_URL)
    console.log("conexion exitosa")
    } catch (error) {
        console.log(error)
    }
 }  
    
export default conexion