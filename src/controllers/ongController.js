const conn = require("../database/");
const crypto = require("crypto");
module.exports = {
  async index(req, res) {
    const result = await conn("ongs").select("*");

    res.json(result);
  },
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await conn("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  }
};
