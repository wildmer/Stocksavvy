import EntriesModel from "../models/entries.js";

const entriesCtrl = {};

//get all entries actives in the system
entriesCtrl.getEntries = async (req, res) => {
  try {
    const entries = await EntriesModel.find({ status: 1 });

    res.json({ entries });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//get entry by id
entriesCtrl.getEntryId = async (req, res) => {
  const { id } = req.params;
  try {
    const entry = await EntriesModel.findById(id);

    res.json({ entry });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//register new entry
entriesCtrl.registerEntry = async (req, res) => {
  const { provider, business, product, quantity } = req.body;
  try {
    const newEntry = new EntriesModel({
      provider,
      business,
      product,
      quantity,
    });

    await newEntry.save();

    res.json({ msg: "Entrada registrada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//update entry
entriesCtrl.updateEntry = async (req, res) => {
  const { id } = req.params;
  const { provider, business, product, quantity } = req.body;
  try {
    await EntriesModel.findByIdAndUpdate(id, {
      provider,
      business,
      product,
      quantity,
    });

    res.json({ msg: "Entrada actualizada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//active entry
entriesCtrl.activeEntry = async (req, res) => {
  const { id } = req.params;
  try {
    await EntriesModel.findByIdAndUpdate(id, {
      status: 1,
    });

    res.json({ msg: "Entrada activada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//inactive entry
entriesCtrl.inactiveEntry = async (req, res) => {
  const { id } = req.params;
  try {
    await EntriesModel.findByIdAndUpdate(id, {
      status: 0,
    });

    res.json({ msg: "Entrada desactivada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

export default entriesCtrl;
