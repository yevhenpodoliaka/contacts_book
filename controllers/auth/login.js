const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error(`Email or password is wrong"`);
    error.status = 401;
    throw error;
  }
  const passwordCompare = bcrypt.compareSync(password, user.password);
  if (!passwordCompare) {
    const error = new Error(`Email or password is wrong"`);
    error.status = 401;
    throw error;
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
 await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
   name: user.name,
    email: user.email,
    subscription: user.subscription,
    avatarURL: user.avatarURL,
    },
    token,
  });
};
module.exports = login;
