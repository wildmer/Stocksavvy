import CategoryModel from "../models/categories.js";

const categoriesCtrl = {};

//get all categories actives in the system
categoriesCtrl.getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find({ status: 1 });

    res.json({ categories });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//get category by id
categoriesCtrl.getCategoryId = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findById(id);

    res.json({ category });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//register new category
categoriesCtrl.registerCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newCategory = new CategoryModel({
      name,
      description,
    });

    await newCategory.save();

    res.json({ msg: "Categoria registrada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//update category
categoriesCtrl.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    await CategoryModel.findByIdAndUpdate(id, {
      name,
      description,
    });

    res.json({ msg: "Categoria actualizada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//active category
categoriesCtrl.activeCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await CategoryModel.findByIdAndUpdate(id, {
      status: 1,
    });

    res.json({ msg: "Categoria activada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//inactive category
categoriesCtrl.inactiveCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await CategoryModel.findByIdAndUpdate(id, {
      status: 0,
    });

    res.json({ msg: "Categoria inactivada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

export default categoriesCtrl;
