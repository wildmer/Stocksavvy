import { check } from "express-validator";
import validateFields from "../middleware/validate_fields.js";
import webToken from "../middleware/web_token.js";
import userHelper from "../helpers/user.helper.js";

const userVali = {};

const { uniqueEmail, uniqueDocument, validateExistUser } = userHelper;
const { validateToken } = webToken;

//validate fields for login a user
userVali.validateLogin = [
  check("email", "El email no puede estar vacio").notEmpty(),
  check("email", "El email no es valido").isEmail(),
  check("password", "La contraseña es obligatoria").notEmpty(),
  check("password", "La contraseña debe tener al menos 6 caracteres").isLength({
    min: 6,
  }),
  validateFields,
];

//validate fields for register user
userVali.validateRegister = [
  check("name", "El nombre es obligatorio").notEmpty(),
  check("email", "El correo es obligatorio").notEmpty(),
  check("email", "El coreo no es valido").isEmail(),
  check("email").custom(async (email) => {
    await uniqueEmail(email);
  }),
  check("tpdocument", "El tipo de documento no puede estar vacio").notEmpty(),
  check("tpdocument", "Tipo de documento no valido").isIn([
    "CC",
    "TI",
    "PAS",
    "NIT",
    "RUT",
  ]),
  check("ndocument", "El numero de documento no puede estar vacio").notEmpty(),
  check("ndocument").custom(async (ndocument) => {
    await uniqueDocument(ndocument);
  }),

  check("password", "La contraseña es obligatoria").notEmpty(),
  check("password", "La contraseña debe tener al menos 6 caracteres").isLength({
    min: 6,
  }),
  check("role", "El rol no es valido").isIn(["USER", "ADMIN"]),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

//validate fields for register user
userVali.validateUpdate = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistUser(id);
  }),
  check("name", "El nombre es obligatorio").notEmpty(),
  check("email", "El correo es obligatorio").notEmpty(),
  check("email", "El coreo no es valido").isEmail(),
  check("email").custom(async (email, { req }) => {
    await uniqueEmail(email, req.params.id);
  }),
  check("tpdocument", "El tipo de documento no puede estar vacio").notEmpty(),
  check("tpdocument", "Tipo de documento no valido").isIn([
    "CC",
    "TI",
    "PAS",
    "NIT",
    "RUT",
  ]),
  check("ndocument", "El numero de documento no puede estar vacio").notEmpty(),
  check("ndocument").custom(async (ndocument, { req }) => {
    await uniqueDocument(ndocument, req.params.id);
  }),

  check("password", "La contraseña es obligatoria").notEmpty(),
  check("password", "La contraseña debe tener al menos 6 caracteres").isLength({
    min: 6,
  }),
  check("role", "El rol no es valido").isIn(["USER", "ADMIN"]),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

userVali.validateUser = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistUser(id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),

  validateFields,
];

//validate token
userVali.validateToken = [
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
];

export default userVali;
