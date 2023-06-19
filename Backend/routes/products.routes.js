import { Router } from "express";
import productsCtrl from "../controllers/products.controller.js";
import productsVali from "../validations/products.validation.js";

const {
  getProducts,
  getProductId,
  registerProduct,
  updateProduct,
  activeProduct,
  inactiveProduct,
} = productsCtrl;

const { validateToken, validateRegister, validateUpdate, validateProduct } =
  productsVali;

const routesProducts = Router();

routesProducts.get("/:id", validateProduct, getProductId);
routesProducts.get("/", validateToken, getProducts);
routesProducts.post("/register", validateRegister, registerProduct);
routesProducts.put("/update/:id", validateUpdate, updateProduct);
routesProducts.put("/active/:id", validateProduct, activeProduct);
routesProducts.put("/inactive/:id", validateProduct, inactiveProduct);

export default routesProducts;
