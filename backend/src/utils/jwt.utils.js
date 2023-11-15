import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwtConifug.js";

const JWT_KEY = jwtConfig.JWT_KEY;

const generateToken = (user, expires) => {
  const token = jwt.sign(user, JWT_KEY, { expiresIn: expires });
  return token;
};

export default generateToken;
