import { check } from "express-validator";
import validateFields from "../middleware/validate_fields.js";
import webToken from "../middleware/web_token.js";
import outsHelper from "../helpers/outs.helper.js";

const outsVali = {};

const { validateToken } = webToken;
const { validateExistOut, validateExistProduct } = outsHelper;

outsVali.validateRegister = [
  check("product", "El producto es obligatorio").notEmpty(),
  check("product", "El producto no es valido").isMongoId(),
  check("product").custom(async (product) => {
    await validateExistProduct(product);
  }),
  check("quantity", "La cantidad es obligatoria").notEmpty(),
  check("quantity", "La cantidad no es valida").isNumeric(),
  check("quantity", "La cantidad debe ser mayor a 0").isInt({ min: 1 }),
  check("client", "El cliente es obligatorio").notEmpty(),
  check("email", "El email es obligatorio").notEmpty(),
  check("email", "El email no es valido").isEmail(),
  check("ndocument", "El numero de documento es obligatorio").notEmpty(),
  check("phone", "El telefono es obligatorio").notEmpty(),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

outsVali.validateUpdate = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistOut(id);
  }),
  check("product", "El producto es obligatorio").notEmpty(),
  check("product", "El producto no es valido").isMongoId(),
  check("product").custom(async (product) => {
    await validateExistProduct(product);
  }),
  check("quantity", "La cantidad es obligatoria").notEmpty(),
  check("quantity", "La cantidad no es valida").isNumeric(),
  check("quantity", "La cantidad debe ser mayor a 0").isInt({ min: 1 }),
  check("client", "El cliente es obligatorio").notEmpty(),
  check("email", "El email es obligatorio").notEmpty(),
  check("email", "El email no es valido").isEmail(),
  check("ndocument", "El numero de documento es obligatorio").notEmpty(),
  check("phone", "El telefono es obligatorio").notEmpty(),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

outsVali.validateOut = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistOut(id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

outsVali.validateToken = [
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

export default outsVali;
