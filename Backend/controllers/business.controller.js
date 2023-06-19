import BusinessModel from "../models/business.js";

const businessCtrl = {};

// Get all business
businessCtrl.getBusiness = async (req, res) => {
  try {
    const business = await BusinessModel.find({ status: 1 });
    res.json({business});
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

// Get business by id
businessCtrl.getBusinessId = async (req, res) => {
  const { id } = req.params;
  try {
    const business = await BusinessModel.findById(id);
    res.json({business});
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

// Register new business
businessCtrl.registerBusiness = async (req, res) => {
  const { name, address, phone, email } = req.body;
  try {
    const newBusiness = new BusinessModel({
      name,
      address,
      phone,
      email,
    });
    await newBusiness.save();
    res.json({ msg: "Empresa registrada correctamente" });
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

// Update business
businessCtrl.updateBusiness = async (req, res) => {
  const { id } = req.params;
  const { name, address, phone, email } = req.body;
  try {
    await BusinessModel.findByIdAndUpdate(id, {
      name,
      address,
      phone,
      email,
    });
    res.json({ msg: "Empresa actualizada correctamente" });
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

// Active business
businessCtrl.activeBusiness = async (req, res) => {
  const { id } = req.params;
  try {
    await BusinessModel.findByIdAndUpdate(id, { status: 1 });
    res.json({ msg: "Empresa activada correctamente" });
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

// Inactive business
businessCtrl.inactiveBusiness = async (req, res) => {
  const { id } = req.params;
  try {
    await BusinessModel.findByIdAndUpdate(id, { status: 0 });
    res.json({ msg: "Empresa desactivada correctamente" });
  } catch (error) {
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

export default businessCtrl;
