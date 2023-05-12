import mongoose from "mongoose";


 const conexion =() =>{

    try {
        mongoose.connect("mongodb+srv://raulyesidv:1234@softwarepanelero.jum1rzx.mongodb.net/software_panelero")
    console.log("conexion exitosa")
    } catch (error) {
        console.log(error)
    }
 }  
    
export default conexion