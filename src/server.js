require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const sequelize = require("./config/database");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);

app.listen(3000, async () => {
  await sequelize.sync({ force: false });
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
