import OutsModel from "../models/outs.js";

const outsCtrl = {};

//get all outs actives in the system
outsCtrl.getOuts = async (req, res) => {
  try {
    const outs = await OutsModel.find({ status: 1 });

    res.json({ outs });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//get out by id
outsCtrl.getOutId = async (req, res) => {
  const { id } = req.params;
  try {
    const out = await OutsModel.findById(id);

    res.json({ out });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//register new out
outsCtrl.registerOut = async (req, res) => {
  const { product, quantity, client, email, ndocument, phone } = req.body;

  try {
    const newOut = new OutsModel({
      product,
      quantity,
      client,
      email,
      ndocument,
      phone,
    });

    await newOut.save();

    res.json({ msg: "Salida registrada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//update out
outsCtrl.updateOut = async (req, res) => {
  const { id } = req.params;
  const { product, quantity, client, email, ndocument, phone } = req.body;
  try {
    await OutsModel.findByIdAndUpdate(id, {
      product,
      quantity,
      client,
      email,
      ndocument,
      phone,
    });

    res.json({ msg: "Salida actualizada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//active out
outsCtrl.activeOut = async (req, res) => {
  const { id } = req.params;
  try {
    await OutsModel.findByIdAndUpdate(id, {
      status: 1,
    });

    res.json({ msg: "Salida activada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//inactive out
outsCtrl.inactiveOut = async (req, res) => {
  const { id } = req.params;
  try {
    await OutsModel.findByIdAndUpdate(id, {
      status: 0,
    });

    res.json({ msg: "Salida desactivada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

export default outsCtrl;
