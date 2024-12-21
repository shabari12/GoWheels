const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !lastname || !email || !password) {
    throw new Error("All fields are required");
  }

  const userExists = await userModel.findOne({ email });
  if (userExists) {
    throw new Error("Email already in use");
  }

  const user = await userModel.create({
    fullname: { firstname, lastname },
    email,
    password,
  });

  return user;
};

module.exports.hashPassword = async (password) => {
  return await userModel.hashPassword(password);
};
