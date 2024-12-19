const express = require("express");

const model = require("../schema/model");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const data = await model.find({});
    res.status(200).json({ message: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
});
route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await model.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "user not found " });
  }
});

module.exports = route;
