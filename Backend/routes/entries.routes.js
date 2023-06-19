import { Router } from "express";
import entriesCtrl from "../controllers/entries.controller.js";
import entriesVali from "../validations/entries.validation.js";

const {
  getEntries,
  getEntryId,
  registerEntry,
  updateEntry,
  activeEntry,
  inactiveEntry,
} = entriesCtrl;

const { validateToken, validateRegister, validateUpdate, validateEntry } =
  entriesVali;

const routesEntries = Router();

routesEntries.get("/:id", validateEntry, getEntryId);
routesEntries.get("/", validateToken, getEntries);
routesEntries.post("/register", validateRegister, registerEntry);
routesEntries.put("/update/:id", validateUpdate, updateEntry);
routesEntries.put("/active/:id", validateEntry, activeEntry);
routesEntries.put("/inactive/:id", validateEntry, inactiveEntry);

export default routesEntries;
