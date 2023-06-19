import { Schema, model } from "mongoose";

const OutsSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "ProductModel",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    ndocument: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
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

export default model("OutsModel", OutsSchema);
