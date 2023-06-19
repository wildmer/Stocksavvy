import RefundModel from "../models/refunds.js";
import ProviderModel from "../models/providers.js";
import ProductModel from "../models/products.js";
import BusinessModel from "../models/business.js";

const refundsHelper = {};

refundsHelper.validateExistRefund = async (id) => {
  try {
    const refund = await RefundModel.findById(id);
    if (!refund) throw new Error();
  } catch (error) {
    throw new Error("La devolución no existe");
  }
};

refundsHelper.validateExistProvider = async (id) => {
  try {
    const provider = await ProviderModel.findById(id);
    if (!provider) throw new Error();
  } catch (error) {
    throw new Error("El proveedor no existe");
  }
};

refundsHelper.validateExistProduct = async (id) => {
  try {
    const product = await ProductModel.findById(id);
    if (!product) throw new Error();
  } catch (error) {
    throw new Error("El producto no existe");
  }
};

refundsHelper.validateExistBusiness = async (id) => {
  try {
    const business = await BusinessModel.findById(id);
    if (!business) throw new Error();
  } catch (error) {
    throw new Error("La empresa no existe");
  }
};

export default refundsHelper;
