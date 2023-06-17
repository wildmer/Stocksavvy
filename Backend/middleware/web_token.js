import jwt from "jsonwebtoken";
import UserModel from "../models/users.js"

const webToken = {};

webToken.generateToken = async (user) => {
  const payload = {
    id: user._id,
    role: user.role,
  };

  try {
    const token = jwt.sign(payload, process.env.SECRET_PASS_JWT, {
      expiresIn: "2d",
      algorithm: "ES256",
    });

    return token;
  } catch (error) {
    console.log(error);
    throw new Error("No fue posible generar el token");
  }
};

webToken.validateToken = async (token, isAdmin = true) => {
  if (!token) throw new Error("No se ha enviado token");

  try {
    const result = jwt.verify(token, process.env.SECRET_PASS_JWT, {
      algorithm: "ES256",
    });

    let user = await UserModel.findById(result.id, {status:1})

    if(!user) throw new Error('Usuario no existe')

    if(isAdmin && user.role == "USER") throw new Error('No tiene permisos para realizar esta accion')

  } catch (error) {throw new Error('Token invalido')}
};


export default webToken