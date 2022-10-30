const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { User } = require("../../models");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { password, email, name } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const error = new Error(`user with email:${email} already exist`);
    error.status = 409;
    throw error;
  }
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);

  await User.create({
    name,
    email,
    password: hashedPassword,
    avatarURL,
  });
  const registeredUser = await User.findOne({ email });
  const payload = {
    id: registeredUser._id,
  };
  const token =  jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
await User.findByIdAndUpdate(registeredUser._id,{token,});
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      name: registeredUser.name,
      email: registeredUser.email,
      subscription: registeredUser.subscription,
      avatarURL: registeredUser.avatarURL,
    },

    token,
  });
};

module.exports = register;
