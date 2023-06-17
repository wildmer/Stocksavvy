import { Router } from "express";
import userCtrl from "../controllers/users.controller.js";
import userVali from "../validations/user.validation.js"

const {
    getUsers,
    loginUser,
    registerUser,
    updateUser
} = userCtrl


const {
    validateToken,
    validateLogin,
    validateRegiter,
    validateUpdate
} = userVali

const routesUsers = Router() 

routesUsers.get("/",validateToken, getUsers)
routesUsers.post("/login",validateLogin, loginUser)
routesUsers.post('/register',validateRegiter, registerUser)
routesUsers.put("/update/:id",validateUpdate, updateUser)



export default routesUsers



