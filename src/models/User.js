// import { Sequelize, Model } from "sequelize";
const { Sequelize, Model } = require("sequelize");
const bcryptjs = require("bcryptjs");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255], // caracteres
              msg: "Campo nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email já existe",
          },
          validate: {
            isEmail: {
              msg: "Email inválido",
            },
          },
        },
        password: {
          type: Sequelize.STRING, // Não vai existir no db
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "A senha deve ter entre 6 e 50 caracteres",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    this.addHook("beforeSave", async (user) => {
      user.password_hash = await bcryptjs.hash(String(user.password), 10);
      // Pega o password, faz o hash e joga para o password_hash, que vai ser salvo do db
    });
    return this;
  }
}

module.exports = User;