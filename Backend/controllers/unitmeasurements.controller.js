import UnitMeasurementModel from "../models/unitmeasurements.js";

const unitmeasurementsCtrl = {};

//get all unitmeasurements actives in the system
unitmeasurementsCtrl.getUnitmeasurements = async (req, res) => {
  try {
    const unitmeasurements = await UnitMeasurementModel.find({ status: 1 });

    res.json({ unitmeasurements });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//get unitmeasurement by id
unitmeasurementsCtrl.getUnitmeasurementId = async (req, res) => {
  const { id } = req.params;
  try {
    const unitmeasurement = await UnitMeasurementModel.findById(id);

    res.json({ unitmeasurement });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//register new unitmeasurement
unitmeasurementsCtrl.registerUnitmeasurement = async (req, res) => {
  const { name, description, unitmeasurement } = req.body;

  try {
    const newUnitmeasurement = new UnitMeasurementModel({
      name,
      description,
      unitmeasurement,
    });

    await newUnitmeasurement.save();

    res.json({ msg: "Unidad de medida registrada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//update unitmeasurement
unitmeasurementsCtrl.updateUnitmeasurement = async (req, res) => {
  const { id } = req.params;
  const { name, description, unitmeasurement } = req.body;

  try {
    await UnitMeasurementModel.findByIdAndUpdate(id, {
      name,
      description,
      unitmeasurement,
    });

    res.json({ msg: "Unidad de medida actualizada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//active unitmeasurement
unitmeasurementsCtrl.activeUnitmeasurement = async (req, res) => {
  const { id } = req.params;

  try {
    await UnitMeasurementModel.findByIdAndUpdate(id, {
      status: 1,
    });

    res.json({ msg: "Unidad de medida activada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//inactive unitmeasurement
unitmeasurementsCtrl.inactiveUnitmeasurement = async (req, res) => {
  const { id } = req.params;

  try {
    await UnitMeasurementModel.findByIdAndUpdate(id, {
      status: 0,
    });

    res.json({ msg: "Unidad de medida desactivada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

export default unitmeasurementsCtrl;
