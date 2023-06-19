import BusinessModel from "../models/business.js";

const businessHelper = {};

businessHelper.uniqueEmail = async (email, id = null) => {
  try {
    const business = await BusinessModel.findOne({ email, status: 1 });
    if (id && business._id != id) throw new Error();
    if (business && !id) throw new Error();
  } catch (error) {
    throw new Error("El correo ya está en uso");
  }
};

businessHelper.uniquePhone = async (phone, id = null) => {
  try {
    const business = await BusinessModel.findOne({ phone, status: 1 });
    if (id && business._id != id) throw new Error();
    if (business && !id) throw new Error();
  } catch (error) {
    throw new Error("El teléfono ya está en uso");
  }
};

businessHelper.validateExistBusiness = async (id) => {
  try {
    const business = await BusinessModel.findById(id);
    if (!business) throw new Error();
  } catch (error) {
    throw new Error("La empresa no existe");
  }
};

export default businessHelper;
