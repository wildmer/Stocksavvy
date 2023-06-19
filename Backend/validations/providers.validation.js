import { check } from "express-validator";
import validateFields from "../middleware/validate_fields.js";
import webToken from "../middleware/web_token.js";
import providerHelper from "../helpers/providers.helper.js";

const providerVali = {};

const {
  uniqueEmail,
  uniquePhone,
  validateExistBusiness,
  validateExistProvider,
} = providerHelper;
const { validateToken } = webToken;

providerVali.validateRegister = [
  check("name", "El nombre es obligatorio").notEmpty(),
  check("email", "El correo es obligatorio").notEmpty(),
  check("email", "El coreo no es valido").isEmail(),
  check("email").custom(async (email) => {
    await uniqueEmail(email);
  }),
  check("phone", "El telefono es obligatorio").notEmpty(),
  check("phone", "El telefono no es valido").isMobilePhone(),
  check("phone").custom(async (phone) => {
    await uniquePhone(phone);
  }),
  check("business", "La empresa es obligatorio").notEmpty(),
  check("business", "La empresa no es valido").isMongoId(),
  check("business").custom(async (business) => {
    await validateExistBusiness(business);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

providerVali.validateUpdate = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistProvider(id);
  }),
  check("name", "El nombre es obligatorio").notEmpty(),
  check("email", "El correo es obligatorio").notEmpty(),
  check("email", "El coreo no es valido").isEmail(),
  check("email").custom(async (email, { req }) => {
    await uniqueEmail(email, req.body.id);
  }),
  check("phone", "El telefono es obligatorio").notEmpty(),
  check("phone", "El telefono no es valido").isMobilePhone(),
  check("phone").custom(async (phone, { req }) => {
    await uniquePhone(phone, req.body.id);
  }),
  check("business", "La empresa es obligatorio").notEmpty(),
  check("business", "La empresa no es valido").isMongoId(),
  check("business").custom(async (business) => {
    await validateExistBusiness(business);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

providerVali.validateProvider = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistProvider(id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

providerVali.validateToken = [
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

export default providerVali;
