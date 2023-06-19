import RoleModel from "../models/roles.js";

const rolesHelper = {};

rolesHelper.validateExistRole = async (id) => {
  try {
    const role = await RoleModel.findById(id);
    if (!role) throw new Error();
  } catch (error) {
    throw new Error("El rol no existe");
  }
};

export default rolesHelper;
