import { Router } from "express";
import outsCtrl from "../controllers/outs.controller.js";
import outsVali from "../validations/outs.validation.js";

const { getOuts, getOutId, registerOut, updateOut, activeOut, inactiveOut } =
  outsCtrl;

const { validateToken, validateRegister, validateUpdate, validateOut } =
  outsVali;

const routesOuts = Router();

routesOuts.get("/:id", validateOut, getOutId);
routesOuts.get("/", validateToken, getOuts);
routesOuts.post("/register", validateRegister, registerOut);
routesOuts.put("/update/:id", validateUpdate, updateOut);
routesOuts.put("/active/:id", validateOut, activeOut);
routesOuts.put("/inactive/:id", validateOut, inactiveOut);

export default routesOuts;
