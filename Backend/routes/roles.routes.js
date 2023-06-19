import { Router } from "express";
import rolesCtrl from "../controllers/roles.controller.js";
import rolesVali from "../validations/roles.validation.js";

const {
  getRoles,
  getRoleId,
  registerRole,
  updateRole,
  activeRole,
  inactiveRole,
} = rolesCtrl;

const { validateToken, validateRegister, validateUpdate, validateRole } =
  rolesVali;

const routesRoles = Router();

routesRoles.get("/:id", validateRole, getRoleId);
routesRoles.get("/", validateToken, getRoles);
routesRoles.post("/register", validateRegister, registerRole);
routesRoles.put("/update/:id", validateUpdate, updateRole);
routesRoles.put("/active/:id", validateRole, activeRole);
routesRoles.put("/inactive/:id", validateRole, inactiveRole);

export default routesRoles;
