class HomeController {
  async index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

module.exports = new HomeController();
