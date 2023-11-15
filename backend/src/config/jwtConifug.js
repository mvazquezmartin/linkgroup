import * as dotenv from "dotenv";

dotenv.config();

const jwtConfig = {
  JWT_KEY: process.env.JWT_KEY,
};

export default jwtConfig;
