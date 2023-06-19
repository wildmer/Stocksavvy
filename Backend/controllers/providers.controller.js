import ProviderModel from "../models/providers.js";

const providersCtrl = {};

//get all providers actives in the system
providersCtrl.getProviders = async (req, res) => {
  try {
    const providers = await ProviderModel.find({ status: 1 });

    res.json({ providers });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//get provider by id
providersCtrl.getProviderId = async (req, res) => {
  const { id } = req.params;
  try {
    const provider = await ProviderModel.findById(id);

    res.json({ provider });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//register new provider
providersCtrl.registerProvider = async (req, res) => {
  const { name, email, business, phone } = req.body;

  try {
    const newProvider = new ProviderModel({
      name,
      email,
      business,
      phone,
    });

    await newProvider.save();

    res.json({ msg: "Proveedor registrado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//update provider
providersCtrl.updateProvider = async (req, res) => {
  const { id } = req.params;
  const { name, email, business, phone } = req.body;

  try {
    await ProviderModel.findByIdAndUpdate(id, {
      name,
      email,
      business,
      phone,
    });

    res.json({ msg: "Proveedor actualizado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//active provider
providersCtrl.activeProvider = async (req, res) => {
  const { id } = req.params;
  try {
    await ProviderModel.findByIdAndUpdate(id, {
      status: 1,
    });

    res.json({ msg: "Proveedor activado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//inactive provider
providersCtrl.inactiveProvider = async (req, res) => {
  const { id } = req.params;
  try {
    await ProviderModel.findByIdAndUpdate(id, {
      status: 0,
    });

    res.json({ msg: "Proveedor desactivado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

export default providersCtrl;
