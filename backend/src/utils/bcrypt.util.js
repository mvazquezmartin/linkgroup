import bcrypt from "bcrypt";

const createHast = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const passwordCrypted = bcrypt.hashSync(password, salt);

  return passwordCrypted;
};

const passwordValidate = (password, user) => {
  const response = bcrypt.compareSync(password, user.password);

  return response;
};

export default { createHast, passwordValidate };
