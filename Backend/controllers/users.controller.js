import UserModel from "../models/users.js";
import webToken from "../middleware/web_token.js";

let userCtrl = {};

//login user
userCtrl.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email, status: 1 });
    if (!user)
      return res
        .status(400)
        .json({ msg: "El usuario no existe o no está activo" });

    const comparePass = user.matchPassword(password);

    if (!comparePass)
      return res.status(401).json({ msg: "Credenciales incorrectas" });

    const token = await webToken.generateToken(user);

    res.json({ msg: "Usuario logueado correctamente", token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//get user by id
userCtrl.getUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//get all users actives in the system
userCtrl.getUsers = async (req, res) => {
  try {
    const users = await UserModel.find({ status: 1 });

    res.json({ users });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No fue posible terminar la operación" });
  }
};

//register new user

userCtrl.registerUser = async (req, res) => {
  const { name, email, tpdocument, ndocument, password, role } = req.body;
  try {
    const newUser = new UserModel({
      name,
      email,
      tpdocument,
      ndocument,
      password,
      role,
    });

    newUser.password = await newUser.encryptPassword(password);

    await newUser.save();

    res.json({ msg: "Usuario registrado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//update user

userCtrl.updateUser = async (req, res) => {
  const { name, email, tpdocument, ndocument, password, role } = req.body;
  const { id } = req.params;

  let encrypPass = new UserModel({ password });
  encrypPass = await encrypPass.encryptPassword(password);

  try {
    const newUser = await UserModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
        tpdocument,
        ndocument,
        password: encrypPass,
        role,
      },
      { new: true }
    );

    res.json({
      msg: "Usuario actualizado",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//inactive user
userCtrl.activeUser = async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.findByIdAndUpdate(id, {
      status: 1,
    });

    res.json({ msg: "Usuario activado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

//inactive user
userCtrl.inactiveUser = async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.findByIdAndUpdate(id, {
      status: 0,
    });

    res.json({ msg: "Usuario inactivado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "No fue posible terminar la operación",
    });
  }
};

export default userCtrl;
