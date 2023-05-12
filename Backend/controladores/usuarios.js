import modelousuario from "../modelos/usuarios.js";

const usuariohttp= {
    usuarioget:async(req,res) => {
        const usuario= await modelousuario.find() 
        res.json({usuarios:usuario})
    },
    usuariopost:async(req,res) => { 
        const{nombre,correo,contrasena,rol,estado}= req.body
        const usuario= new modelousuario({nombre,correo,contrasena,rol,estado}) 
        await usuario.save()
        res.send("usario creado")
    },
    usuariologin:async(req,res) => {
        const{correo,contrasena}= req.body
        
        const user = await modelousuario.findOne({correo:correo})
        console.log(user)
        console.log(user.contrasena)
        console.log(contrasena)
        user.contrasena == contrasena ? res.send('usuario login') : res.send('incorrecto')
    },

    usuarioput:async(req,res) => { 
        const{nombre,correo,contrasena,rol,estado}= req.body 
        const{id}=req.params
        const usuario= await modelousuario.findByIdAndUpdate(id,{nombre,correo,contrasena,rol,estado}) 
        await usuario.save()
        res.send("usario actualizado")

    },

}

export default usuariohttp