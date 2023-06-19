import { Schema, model } from "mongoose";

const RoleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    modules: {
      type: [Number],
      required: true,
    },
    permissions: {
      type: [Number],
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

export default model("RoleModel", RoleSchema);
