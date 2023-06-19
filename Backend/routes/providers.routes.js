import { Router } from "express";
import providersCtrl from "../controllers/providers.controller.js";
import providersVali from "../validations/providers.validation.js";

const {
  getProviders,
  getProviderId,
  registerProvider,
  updateProvider,
  activeProvider,
  inactiveProvider,
} = providersCtrl;

const { validateToken, validateRegister, validateUpdate, validateProvider } =
  providersVali;

const routesProviders = Router();

routesProviders.get("/:id", validateProvider, getProviderId);
routesProviders.get("/", validateToken, getProviders);
routesProviders.post("/register", validateRegister, registerProvider);
routesProviders.put("/update/:id", validateUpdate, updateProvider);
routesProviders.put("/active/:id", validateProvider, activeProvider);
routesProviders.put("/inactive/:id", validateProvider, inactiveProvider);

export default routesProviders;
