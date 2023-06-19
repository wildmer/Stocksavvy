import RefundModel from "../models/refunds.js";

const refundsCtrl = {};

//get all refunds actives in the system
refundsCtrl.getRefunds = async (req, res) => {
  try {
    const refunds = await RefundModel.find({ status: 1 });

    res.json({ refunds });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//get refund by id
refundsCtrl.getRefundId = async (req, res) => {
  const { id } = req.params;
  try {
    const refund = await RefundModel.findById(id);

    res.json({ refund });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//register new refund
refundsCtrl.registerRefund = async (req, res) => {
  const { provider, business, product, quantity } = req.body;

  try {
    const newRefund = new RefundModel({
      provider,
      business,
      product,
      quantity,
    });

    await newRefund.save();

    res.json({ msg: "Devolución registrada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//update refund
refundsCtrl.updateRefund = async (req, res) => {
  const { id } = req.params;
  const { provider, business, product, quantity } = req.body;

  try {
    await RefundModel.findByIdAndUpdate(id, {
      provider,
      business,
      product,
      quantity,
    });

    res.json({ msg: "Devolución actualizada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//active refund
refundsCtrl.activeRefund = async (req, res) => {
  const { id } = req.params;

  try {
    await RefundModel.findByIdAndUpdate(id, {
      status: 1,
    });

    res.json({ msg: "Devolución activada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//inactive refund
refundsCtrl.inactiveRefund = async (req, res) => {
  const { id } = req.params;

  try {
    await RefundModel.findByIdAndUpdate(id, {
      status: 0,
    });

    res.json({ msg: "Devolución desactivada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

export default refundsCtrl;
