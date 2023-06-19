import UnitMeasurementModel from "../models/unitmeasurements.js";

const unitmeasurementHelper = {};

unitmeasurementHelper.validateExistUnitmeasurement = async (id) => {
  try {
    const unitmeasurement = await UnitMeasurementModel.findById(id);
    if (!unitmeasurement) throw new Error();
  } catch (error) {
    throw new Error("La unidad de medida no existe");
  }
};

export default unitmeasurementHelper;
