import { Schema, model } from "mongoose";
import bcryp from "bcryptjs";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tpdocument: {
      type: String,
      required: true,
    },
    ndocument: {
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
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcryp.genSalt(10);
  return await bcryp.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcryp.compare(password, this.password);
};

export default model("UserModel", UserSchema);
