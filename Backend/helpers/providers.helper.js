import ProviderModel from "../models/providers.js";
import BusinessModel from "../models/business.js";

const providerHelper = {};

providerHelper.uniqueEmail = async (email, id = null) => {
  try {
    const provider = await ProviderModel.findOne({ email, status: 1 });
    if (id && provider._id != id) throw new Error();
    if (provider && !id) throw new Error();
  } catch (error) {
    throw new Error("El correo ya está en uso");
  }
};

providerHelper.uniquePhone = async (phone, id = null) => {
  try {
    const provider = await ProviderModel.findOne({ phone, status: 1 });
    if (id && provider._id != id) throw new Error();
    if (provider && !id) throw new Error();
  } catch (error) {
    throw new Error("El teléfono ya está en uso");
  }
};

providerHelper.validateExistProvider = async (id) => {
  try {
    const provider = await ProviderModel.findById(id);
    if (!provider) throw new Error();
  } catch (error) {
    throw new Error("El proveedor no existe");
  }
};

providerHelper.validateExistBusiness = async (id) => {
  try {
    const business = await BusinessModel.findById(id);
    if (!business) throw new Error();
  } catch (error) {
    throw new Error("La empresa no existe");
  }
};

export default providerHelper;
