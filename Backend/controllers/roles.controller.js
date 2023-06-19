import RoleModel from "../models/roles.js";

const rolesCtrl = {};

//get all roles actives in the system
rolesCtrl.getRoles = async (req, res) => {
  try {
    const roles = await RoleModel.find({ status: 1 });

    res.json({ roles });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//get role by id
rolesCtrl.getRoleId = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await RoleModel.findById(id);

    res.json({ role });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//register new role
rolesCtrl.registerRole = async (req, res) => {
  const { name, modules, permissions } = req.body;

  try {
    const newRole = new RoleModel({
      name,
      modules,
      permissions,
    });

    await newRole.save();

    res.json({ msg: "Rol registrado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//update role
rolesCtrl.updateRole = async (req, res) => {
  const { id } = req.params;
  const { name, modules, permissions } = req.body;

  try {
    await RoleModel.findByIdAndUpdate(id, {
      name,
      modules,
      permissions,
    });

    res.json({ msg: "Rol actualizado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//active role
rolesCtrl.activeRole = async (req, res) => {
  const { id } = req.params;

  try {
    await RoleModel.findByIdAndUpdate(id, {
      status: 1,
    });

    res.json({ msg: "Rol activado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//inactive role
rolesCtrl.inactiveRole = async (req, res) => {
  const { id } = req.params;

  try {
    await RoleModel.findByIdAndUpdate(id, {
      status: 0,
    });

    res.json({ msg: "Rol desactivado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

export default rolesCtrl;
