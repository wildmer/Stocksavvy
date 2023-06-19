import EntriesModel from "../models/entries.js";
import ProductModel from "../models/products.js";
import ProviderModel from "../models/providers.js";
import BusinessModel from "../models/business.js";

const entriesHelper = {};

entriesHelper.validateExistEntry = async (id) => {
  try {
    const entry = await EntriesModel.findById(id);
    if (!entry) throw new Error();
  } catch (error) {
    throw new Error("La entrada no existe");
  }
};

entriesHelper.validateExistProvider = async (id) => {
  try {
    const entry = await ProviderModel.findById(id);
    if (!entry) throw new Error();
  } catch (error) {
    throw new Error("El proveedor no existe");
  }
};

entriesHelper.validateExistProduct = async (id) => {
  try {
    const entry = await ProductModel.findById(id);
    if (!entry) throw new Error();
  } catch (error) {
    throw new Error("El producto no existe");
  }
};

entriesHelper.validateExistBusiness = async (id) => {
  try {
    const entry = await BusinessModel.findById(id);
    if (!entry) throw new Error();
  } catch (error) {
    throw new Error("La empresa no existe");
  }
};

export default entriesHelper;
