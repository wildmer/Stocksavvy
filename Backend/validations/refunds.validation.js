import { check } from "express-validator";
import validateFields from "../middleware/validate_fields.js";
import webToken from "../middleware/web_token.js";
import refundsHelper from "../helpers/refunds.helper.js";

const refundsVali = {};

const { validateToken } = webToken;
const {
  validateExistRefund,
  validateExistProvider,
  validateExistProduct,
  validateExistBusiness,
} = refundsHelper;

refundsVali.validateRegister = [
  check("provider", "El proveedor es obligatorio").notEmpty(),
  check("provider", "El proveedor debe ser un id válido").isMongoId(),
  check("provider").custom(async (provider) => {
    await validateExistProvider(provider);
  }),
  check("business", "El negocio es obligatorio").notEmpty(),
  check("business", "El negocio debe ser un id válido").isMongoId(),
  check("business").custom(async (business) => {
    await validateExistBusiness(business);
  }),
  check("product", "El producto es obligatorio").notEmpty(),
  check("product", "El producto debe ser un id válido").isMongoId(),
  check("product").custom(async (product) => {
    await validateExistProduct(product);
  }),
  check("quantity", "La cantidad es obligatoria").notEmpty(),
  check("quantity", "La cantidad debe ser numerica").isNumeric(),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

refundsVali.validateUpdate = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistRefund(id);
  }),
  check("provider", "El proveedor es obligatorio").notEmpty(),
  check("provider", "El proveedor debe ser un id válido").isMongoId(),
  check("provider").custom(async (provider) => {
    await validateExistProvider(provider);
  }),
  check("business", "El negocio es obligatorio").notEmpty(),
  check("business", "El negocio debe ser un id válido").isMongoId(),
  check("business").custom(async (business) => {
    await validateExistBusiness(business);
  }),
  check("product", "El producto es obligatorio").notEmpty(),
  check("product", "El producto debe ser un id válido").isMongoId(),
  check("product").custom(async (product) => {
    await validateExistProduct(product);
  }),
  check("quantity", "La cantidad es obligatoria").notEmpty(),
  check("quantity", "La cantidad debe ser numerica").isNumeric(),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

refundsVali.validateRefund = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistRefund(id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

refundsVali.validateToken = [
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

export default refundsVali;
