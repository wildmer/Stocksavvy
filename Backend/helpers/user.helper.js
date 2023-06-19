import UserModel from "../models/users.js";

let userHelper = {};

userHelper.uniqueEmail = async (email, id = null) => {
  try {
    const user = await UserModel.findOne({ email, status: 1 });

    if (id && user._id != id) throw new Error();
    if (user && !id) throw new Error();
  } catch (error) {
    console.log(error);
    throw new Error("El correo ya está en uso");
  }
};

userHelper.uniqueDocument = async (document, id = null) => {
  try {
    const user = await UserModel.findOne({ ndocument: document, status: 1 });

    if (id && user._id != id) throw new Error();
    if (user && !id) throw new Error();
  } catch (error) {
    console.log(error);
    throw new Error("El correo ya está en uso");
  }
};

userHelper.validateExistUser = async (id) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) throw new Error();
  } catch (error) {
    console.log(error);
    throw new Error("El usuario no existe");
  }
};

export default userHelper;
