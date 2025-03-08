const { registerUser, loginUser } = require("../services/user.service");
const { successResponse, errorResponse } = require("../utils/responseHandler");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await registerUser(name, email, password);
    successResponse(res, "Usuario registrado", user, 201);
  } catch (error) {
    errorResponse(res, error.message, 400);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    successResponse(res, "Login exitoso", { token });
  } catch (error) {
    errorResponse(res, error.message, 400);
  }
};
