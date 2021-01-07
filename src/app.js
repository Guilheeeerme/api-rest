const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

// import "./database/index.js"; // O arquivo de conexão, não precisa colocar em const
require("./database/index");

const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users", userRoutes);
  }
}

module.exports = new App().app;
