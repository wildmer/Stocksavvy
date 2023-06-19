import { Router } from "express";
import businessCtrl from "../controllers/business.controller.js";
import businessVali from "../validations/business.validation.js";

const {
  getBusiness,
  getBusinessId,
  registerBusiness,
  updateBusiness,
  activeBusiness,
  inactiveBusiness,
} = businessCtrl;

const { validateToken, validateRegister, validateUpdate, validateBusiness } =
  businessVali;

const routesBusiness = Router();
routesBusiness.get("/:id", validateBusiness, getBusinessId);
routesBusiness.get("/", validateToken, getBusiness);
routesBusiness.post("/register", validateRegister, registerBusiness);
routesBusiness.put("/update/:id", validateUpdate, updateBusiness);
routesBusiness.put("/active/:id", validateBusiness, activeBusiness);
routesBusiness.put("/inactive/:id", validateBusiness, inactiveBusiness);

export default routesBusiness;
