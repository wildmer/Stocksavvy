import { Schema, model } from "mongoose";

const RefundSchema = new Schema(
  {
    provider: {
      type: Schema.Types.ObjectId,
      ref: "ProviderModel",
      required: true,
    },
    business: {
      type: Schema.Types.ObjectId,
      ref: "BusinessModel",
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "ProductModel",
      required: true,
    },
    quantity: {
      type: Number,
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

export default model("RefundModel", RefundSchema);
