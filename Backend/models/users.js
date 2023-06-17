import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String, //user admin 
      required: true,
    },
    status: {
      type: Number,
      default:1
    },
  },
  {
    timestamps: true,
  }
);

export default model("UserModel", UserSchema);
