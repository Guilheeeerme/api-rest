const User = require("../models/User");

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
}

module.exports = new UserController();
