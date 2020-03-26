const conn = require("../database");
module.exports = {
  async index(req, res) {
    const { authorization: ong_id } = req.headers;

    const incidents = await conn("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.json(incidents);
  }
};
