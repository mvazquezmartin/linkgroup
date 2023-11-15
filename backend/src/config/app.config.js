import * as dotenv from "dotenv";

dotenv.config();

const appConfig = {
  PORT: process.env.PORT || 3000,
};

export default appConfig;