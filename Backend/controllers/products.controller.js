import ProductModel from "../models/products.js";

const productsCtrl = {};

//get all products actives in the system
productsCtrl.getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({ status: 1 });

    res.json({ products });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//get product by id
productsCtrl.getProductId = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);

    res.json({ product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//register new product
productsCtrl.registerProduct = async (req, res) => {
  const { name, quantity, code, category, type, unitmeasurement } = req.body;

  try {
    const newProduct = new ProductModel({
      name,
      quantity,
      code,
      category,
      type,
      unitmeasurement,
    });

    await newProduct.save();

    res.json({ msg: "Producto registrado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//update product
productsCtrl.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, code, category, type, unitmeasurement } = req.body;
  try {
    await ProductModel.findByIdAndUpdate(id, {
      name,
      quantity,
      code,
      category,
      type,
      unitmeasurement,
    });

    res.json({ msg: "Producto actualizado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//active product
productsCtrl.activeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate(id, {
      status: 1,
    });

    res.json({ msg: "Producto activado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//inactive product
productsCtrl.inactiveProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate(id, {
      status: 0,
    });

    res.json({ msg: "Producto desactivado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

export default productsCtrl;
