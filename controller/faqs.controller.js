const Faqs = require("../models/faqs.model");

const index = async (req, res) => {
  // no more pagination;
  try {
    const result = await Faqs.query();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ code: 400, message: "Internal Server Error" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req?.query;
    await Faqs.query().patchAndFetchById(id, req.body);
    res.json({ code: 200, message: "success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ code: 400, message: "Internal Server Error" });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req?.query;
    await Faqs.query().deleteById(id);
    res.json({ code: 200, message: "success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ code: 400, message: "Internal Server Error" });
  }
};

const detail = async (req, res) => {
  try {
    const { id } = req?.query;

    const result = await Faqs.query().findById(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ code: 400, message: "Internal Server Error" });
  }
};

const create = async (req, res) => {
  try {
    await Faqs.query().insert(req.body);
    res.json({ code: 200, message: "success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ code: 400, message: "Internal Server Error" });
  }
};

module.exports = {
  index,
  update,
  remove,
  detail,
  create,
};