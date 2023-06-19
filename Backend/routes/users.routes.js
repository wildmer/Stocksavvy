import { Router } from "express";
import userCtrl from "../controllers/users.controller.js";
import userVali from "../validations/user.validation.js";

const {
  getUsers,
  getUserId,
  loginUser,
  registerUser,
  updateUser,
  activeUser,
  inactiveUser,
} = userCtrl;

const {
  validateToken,
  validateLogin,
  validateRegister,
  validateUpdate,
  validateUser,
} = userVali;

const routesUsers = Router();
routesUsers.get("/:id", validateUser, getUserId);
routesUsers.get("/", validateToken, getUsers);
routesUsers.post("/login", validateLogin, loginUser);
routesUsers.post("/register", validateRegister, registerUser);
routesUsers.put("/update/:id", validateUpdate, updateUser);
routesUsers.put("/active/:id", validateUser, activeUser);
routesUsers.put("/inactive/:id", validateUser, inactiveUser);

export default routesUsers;
