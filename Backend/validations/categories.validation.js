import { check } from "express-validator";
import validateFields from "../middleware/validate_fields.js";
import webToken from "../middleware/web_token.js";
import categoriesHelper from "../helpers/categories.helper.js";

const categoriesVali = {};

const { validateExistCategory } = categoriesHelper;
const { validateToken } = webToken;

categoriesVali.validateRegister = [
  check("name", "El nombre es obligatorio").notEmpty(),
  check("description", "La descripcion es obligatoria").notEmpty(),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

categoriesVali.validateUpdate = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistCategory(id);
  }),
  check("name", "El nombre es obligatorio").notEmpty(),
  check("description", "La descripcion es obligatoria").notEmpty(),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

categoriesVali.validateCategory = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistCategory(id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

categoriesVali.validateToken = [
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

export default categoriesVali;
