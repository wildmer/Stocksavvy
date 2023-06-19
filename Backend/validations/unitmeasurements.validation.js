import { check } from "express-validator";
import validateFields from "../middleware/validate_fields.js";
import webToken from "../middleware/web_token.js";
import unitmeasurementHelper from "../helpers/unitmeasurement.helper.js";

const unitmeasurementVali = {};

const { validateExistUnitmeasurement } = unitmeasurementHelper;
const { validateToken } = webToken;

unitmeasurementVali.validateRegister = [
  check("name", "El nombre es obligatorio").notEmpty(),
  check("description", "La descripcion es obligatoria").notEmpty(),
  check("unitmeasurement", "La unidad de medida es obligatoria").notEmpty(),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

unitmeasurementVali.validateUpdate = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistUnitmeasurement(id);
  }),
  check("name", "El nombre es obligatorio").notEmpty(),
  check("description", "La descripcion es obligatoria").notEmpty(),
  check("unitmeasurement", "La unidad de medida es obligatoria").notEmpty(),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

unitmeasurementVali.validateUnitmeasurement = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistUnitmeasurement(id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

unitmeasurementVali.validateToken = [
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

export default unitmeasurementVali;
