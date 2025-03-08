const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const registerUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({ name, email, password: hashedPassword });
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("Usuario no encontrado");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Contraseña incorrecta");

  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = { registerUser, loginUser };
