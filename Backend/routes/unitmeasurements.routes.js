import { Router } from "express";
import unitmeasurementsCtrl from "../controllers/unitmeasurements.controller.js";
import unitmeasurementsVali from "../validations/unitmeasurements.validation.js";

const {
  getUnitmeasurements,
  getUnitmeasurementId,
  registerUnitmeasurement,
  updateUnitmeasurement,
  activeUnitmeasurement,
  inactiveUnitmeasurement,
} = unitmeasurementsCtrl;

const {
  validateToken,
  validateRegister,
  validateUpdate,
  validateUnitmeasurement,
} = unitmeasurementsVali;

const routesUnitmeasurements = Router();

routesUnitmeasurements.get(
  "/:id",
  validateUnitmeasurement,
  getUnitmeasurementId
);
routesUnitmeasurements.get("/", validateToken, getUnitmeasurements);
routesUnitmeasurements.post(
  "/register",
  validateRegister,
  registerUnitmeasurement
);
routesUnitmeasurements.put(
  "/update/:id",
  validateUpdate,
  updateUnitmeasurement
);
routesUnitmeasurements.put(
  "/active/:id",
  validateUnitmeasurement,
  activeUnitmeasurement
);
routesUnitmeasurements.put(
  "/inactive/:id",
  validateUnitmeasurement,
  inactiveUnitmeasurement
);

export default routesUnitmeasurements;
