import { check } from "express-validator";
import validateFields from "../middleware/validate_fields.js";
import webToken from "../middleware/web_token.js";
import entriesHelper from "../helpers/entries.helper.js";

const entriesVali = {};

const {
  validateExistEntry,
  validateExistProvider,
  validateExistProduct,
  validateExistBusiness,
} = entriesHelper;
const { validateToken } = webToken;

entriesVali.validateRegister = [
  check("provider", "El proveedor es obligatorio").notEmpty(),
  check("provider", "El proveedor no es valido").isMongoId(),
  check("provider").custom(async (provider) => {
    await validateExistProvider(provider);
  }),
  check("business", "El negocio es obligatorio").notEmpty(),
  check("business", "El negocio no es valido").isMongoId(),
  check("business").custom(async (business) => {
    await validateExistBusiness(business);
  }),
  check("product", "El producto es obligatorio").notEmpty(),
  check("product", "El producto no es valido").isMongoId(),
  check("product").custom(async (product) => {
    await validateExistProduct(product);
  }),
  check("quantity", "La cantidad es obligatoria").notEmpty(),
  check("quantity", "La cantidad no es valida").isNumeric(),
  check("quantity", "La cantidad debe ser mayor a 0").isInt({ min: 1 }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

entriesVali.validateUpdate = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistEntry(id);
  }),
  check("provider", "El proveedor es obligatorio").notEmpty(),
  check("provider", "El proveedor no es valido").isMongoId(),
  check("provider").custom(async (provider) => {
    await validateExistProvider(provider);
  }),
  check("business", "El negocio es obligatorio").notEmpty(),
  check("business", "El negocio no es valido").isMongoId(),
  check("business").custom(async (business) => {
    await validateExistBusiness(business);
  }),
  check("product", "El producto es obligatorio").notEmpty(),
  check("product", "El producto no es valido").isMongoId(),
  check("product").custom(async (product) => {
    await validateExistProduct(product);
  }),
  check("quantity", "La cantidad es obligatoria").notEmpty(),
  check("quantity", "La cantidad no es valida").isNumeric(),
  check("quantity", "La cantidad debe ser mayor a 0").isInt({ min: 1 }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

entriesVali.validateEntry = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistEntry(id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

entriesVali.validateToken = [
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

export default entriesVali;
