import CategoryModel from "../models/categories.js";

const categoriesHelper = {};

categoriesHelper.validateExistCategory = async (id) => {
  try {
    const category = await CategoryModel.findById(id);
    if (!category) throw new Error();
  } catch (error) {
    throw new Error("La categoría no existe");
  }
};

export default categoriesHelper;
