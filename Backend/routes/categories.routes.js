import { Router } from "express";
import categoriesCtrl from "../controllers/categories.controller.js";
import categoriesVali from "../validations/categories.validation.js";

const {
  getCategories,
  getCategoryId,
  registerCategory,
  updateCategory,
  activeCategory,
  inactiveCategory,
} = categoriesCtrl;

const { validateToken, validateRegister, validateUpdate, validateCategory } =
  categoriesVali;

const routesCategories = Router();

routesCategories.get("/:id", validateCategory, getCategoryId);
routesCategories.get("/", validateToken, getCategories);
routesCategories.post("/register", validateRegister, registerCategory);
routesCategories.put("/update/:id", validateUpdate, updateCategory);
routesCategories.put("/active/:id", validateCategory, activeCategory);
routesCategories.put("/inactive/:id", validateCategory, inactiveCategory);

export default routesCategories;
