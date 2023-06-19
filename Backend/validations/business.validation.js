import { check } from "express-validator";
import validateFields from "../middleware/validate_fields.js";
import webToken from "../middleware/web_token.js";
import businessHelper from "../helpers/business.helper.js";

const businessVali = {};

const { uniqueEmail, uniquePhone, validateExistBusiness } = businessHelper;
const { validateToken } = webToken;

businessVali.validateRegister = [
  check("name", "El nombre es obligatorio").notEmpty(),
  check("address", "La direccion es obligatoria").notEmpty(),
  check("phone", "El telefono es obligatorio").notEmpty(),
  check("phone", "El telefono no es valido").isMobilePhone(),
  check("phone").custom(async (phone) => {
    await uniquePhone(phone);
  }),
  check("email", "El correo es obligatorio").notEmpty(),
  check("email", "El coreo no es valido").isEmail(),
  check("email").custom(async (email) => {
    await uniqueEmail(email);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

businessVali.validateUpdate = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistBusiness(id);
  }),
  check("name", "El nombre es obligatorio").notEmpty(),
  check("address", "La direccion es obligatoria").notEmpty(),
  check("phone", "El telefono es obligatorio").notEmpty(),
  check("phone", "El telefono no es valido").isMobilePhone(),
  check("phone").custom(async (phone, { req }) => {
    await uniquePhone(phone, req.params.id);
  }),
  check("email", "El correo es obligatorio").notEmpty(),
  check("email", "El coreo no es valido").isEmail(),
  check("email").custom(async (email, { req }) => {
    await uniqueEmail(email, req.params.id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

businessVali.validateBusiness = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistBusiness(id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

businessVali.validateToken = [
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

export default businessVali;
