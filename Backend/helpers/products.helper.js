import ProductModel from "../models/products.js";
import CategoryModel from "../models/categories.js";
import UnitMeasurementModel from "../models/unitmeasurements.js";

const productsHelper = {};

productsHelper.validateExistProduct = async (id) => {
  try {
    const product = await ProductModel.findById(id);
    if (!product) throw new Error();
  } catch (error) {
    throw new Error("El producto no existe");
  }
};

productsHelper.validateExistCategory = async (id) => {
  try {
    const category = await CategoryModel.findById(id);
    if (!category) throw new Error();
  } catch (error) {
    throw new Error("La categoría no existe");
  }
};

productsHelper.validateExistUnitMeasurement = async (id) => {
  try {
    const unitMeasurement = await UnitMeasurementModel.findById(id);
    if (!unitMeasurement) throw new Error();
  } catch (error) {
    throw new Error("La unidad de medida no existe");
  }
};

export default productsHelper;
