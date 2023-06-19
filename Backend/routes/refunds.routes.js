import { Router } from "express";
import refundsCtrl from "../controllers/refunds.controller.js";
import refundsVali from "../validations/refunds.validation.js";

const {
  getRefunds,
  getRefundId,
  registerRefund,
  updateRefund,
  activeRefund,
  inactiveRefund,
} = refundsCtrl;

const { validateToken, validateRegister, validateUpdate, validateRefund } =
  refundsVali;

const routesRefunds = Router();

routesRefunds.get("/:id", validateRefund, getRefundId);
routesRefunds.get("/", validateToken, getRefunds);
routesRefunds.post("/register", validateRegister, registerRefund);
routesRefunds.put("/update/:id", validateUpdate, updateRefund);
routesRefunds.put("/active/:id", validateRefund, activeRefund);
routesRefunds.put("/inactive/:id", validateRefund, inactiveRefund);

export default routesRefunds;
