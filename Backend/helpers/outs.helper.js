import OutsModel from "../models/outs.js";
import ProductModel from "../models/products.js";

let outsHelper = {};

outsHelper.validateExistOut = async (id) => {
  try {
    const out = await OutsModel.findById(id);
    if (!out) throw new Error();
  } catch (error) {
    throw new Error("La salida no existe");
  }
};

outsHelper.validateExistProduct = async (id) => {
  try {
    const product = await ProductModel.findById(id);
    if (!product) throw new Error();
  } catch (error) {
    throw new Error("El producto no existe");
  }
};

export default outsHelper;
