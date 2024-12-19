const express = require("express");
const joi = require("joi");
const model = require("../schema/model");
const signup = express.Router();
const bcrypt = require("bcrypt")
signup.post("/", async (req, res) => {
  const schema = joi.object({
    name: joi.string().required(),
    last: joi.string().required(),
    password: joi.string().required(),
    phone: joi.string().required(),
    age: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }
  try {
    const existuser = await model.findOne({ phone: req.body.phone});
    if (existuser) {
      return res.status(400).json({
        success: false,
        message: `phone is already in use `,
      });
    }
    const password = await bcrypt.hash(req.body.password,10)
    const newuser = new model({
      name: req.body.name,
      last: req.body.last,
      phone: req.body.phone,
      password: password,
      age: req.body.age,
    });
    const saveuser = await newuser.save();
    res.status(201).json({
      message: "regihbgjcg",
      data: saveuser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "busy",
    });
  }
});
module.exports = signup;
