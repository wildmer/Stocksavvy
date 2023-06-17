import { validationResult } from "express-validator";

//validate if exist errors in the check of express
const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = errors.array().map((error) => {
      return error.msg;
    });

    console.log(err);
    return res.status(400).json({
      msg: "Error in the validations",
      errors: err,
    });
  }

  next();
};


export default validateFields