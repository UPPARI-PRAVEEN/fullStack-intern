const Data = require("../models/Data");

exports.getAll = async (req, res) => {
  const data = await Data.find();
  res.json(data);
};

exports.create = async (req, res) => {
  const newData = new Data(req.body);
  await newData.save();
  res.json(newData);
};

exports.update = async (req, res) => {
  const updated = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.delete = async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};
