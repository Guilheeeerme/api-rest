// import { Sequelize, Model } from "sequelize";
const { Sequelize, Model } = require("sequelize");

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

module.exports = Aluno;
