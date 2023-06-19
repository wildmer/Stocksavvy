import { check } from "express-validator";
import validateFields from "../middleware/validate_fields.js";
import webToken from "../middleware/web_token.js";
import rolesHelper from "../helpers/roles.helper.js";

const rolesVali = {};

const { validateToken } = webToken;
const { validateExistRole } = rolesHelper;

rolesVali.validateRegister = [
  check("name", "El nombre es obligatorio").notEmpty(),
  check("modules", "Los modulos son obligatorios").notEmpty(),
  check("modules", "Los modulos deben ser un arreglo").isArray(),
  check("modules").custom((modules) => {
    modules.forEach((module) => {
      if (module < 1 || module > 5) {
        throw new Error("Los modulos deben ser numeros del 1 al 5");
      }
    });
    return true;
  }),

  check("permissions", "Los permisos son obligatorios").notEmpty(),
  check("permissions", "Los permisos deben ser un arreglo").isArray(),
  check("permissions").custom((permissions) => {
    permissions.forEach((permission) => {
      if (permission < 1 || permission > 5) {
        throw new Error("Los permisos deben ser numeros del 1 al 5");
      }
    });
    return true;
  }),

  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

rolesVali.validateUpdate = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistRole(id);
  }),
  check("name", "El nombre es obligatorio").notEmpty(),
  check("modules", "Los modulos son obligatorios").notEmpty(),
  check("modules", "Los modulos deben ser un arreglo").isArray(),
  check("modules").custom((modules) => {
    modules.forEach((module) => {
      if (module < 1 || module > 5) {
        throw new Error("Los modulos deben ser numeros del 1 al 5");
      }
    });
    return true;
  }),

  check("permissions", "Los permisos son obligatorios").notEmpty(),
  check("permissions", "Los permisos deben ser un arreglo").isArray(),
  check("permissions").custom((permissions) => {
    permissions.forEach((permission) => {
      if (permission < 1 || permission > 5) {
        throw new Error("Los permisos deben ser numeros del 1 al 5");
      }
    });
    return true;
  }),

  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

rolesVali.validateRole = [
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateExistRole(id);
  }),
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

rolesVali.validateToken = [
  check("token").custom(async (token) => {
    await validateToken(token);
  }),
  validateFields,
];

export default rolesVali;
