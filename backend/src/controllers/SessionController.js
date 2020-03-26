const conn = require("../database");
module.exports = {
  async index(req, res) {
    const { ong_id } = req.body;

    const ong = await conn("ongs")
      .where("id", ong_id)
      .select("name")
      .first();

    if (!ong) {
      return res.status(400).json({ error: "No ONG find with this id" });
    }
    return res.json(ong);
  }
};
