import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      default: "",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "CategoryModel",
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    unitmeasurement: {
      type: Schema.Types.ObjectId,
      ref: "UnitMeasurementModel",
      required: true,
    },

    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export default model("ProductModel", ProductSchema);
