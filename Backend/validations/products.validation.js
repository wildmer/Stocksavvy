import { check } from "express-validator";
import validateFields from "../middleware/validate_fields.js";
import webToken from "../middleware/web_token.js";
import productsHelper from "../helpers/products.helper.js";

const productsVali = {};

const {
  validateExistProduct,
  validateExistCategory,
  validateExistUnitMeasurement,
} = productsHelper;
const { validateToken } = webToken;

productsVali.validateRegister = [
  check("name", "El nombre es obligatorio").notEmpty(),
  check("quantity", "La cantidad es obligatoria").notEmpty(),
  check("quantity", "La cantidad debe ser numerica").isNumeric(),
  check("category", "La categoria es obligatoria").notEmpty(),
  check("category", "La categoria no es valida").isMongoId(),
  check("category").custom(async (category) => {
    await validateExistCategory(category);
  }),
  check("unitmeasurement", "La unidad de medida es obligatoria").notEmpty(),
  check("unitmeasurement", "La unidad de medida no es valida").isMongoId(),
  check("unitmeasurement").custom(async (unitmeasurement) => {
    await validateExistUnitMeasurement(unitmeasurement);
  }),
  check("type", "El tipo es obligatorio").notEmpty(),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

productsVali.validateUpdate = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistProduct(id);
  }),
  check("name", "El nombre es obligatorio").notEmpty(),
  check("quantity", "La cantidad es obligatoria").notEmpty(),
  check("quantity", "La cantidad debe ser numerica").isNumeric(),
  check("category", "La categoria es obligatoria").notEmpty(),
  check("category", "La categoria no es valida").isMongoId(),
  check("category").custom(async (category) => {
    await validateExistCategory(category);
  }),
  check("unitmeasurement", "La unidad de medida es obligatoria").notEmpty(),
  check("unitmeasurement", "La unidad de medida no es valida").isMongoId(),
  check("unitmeasurement").custom(async (unitmeasurement) => {
    await validateExistUnitMeasurement(unitmeasurement);
  }),
  check("type", "El tipo es obligatorio").notEmpty(),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

productsVali.validateProduct = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistProduct(id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

productsVali.validateToken = [
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

export default productsVali;
