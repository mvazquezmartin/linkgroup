import mongoose from "mongoose";
import mongoConfig from "../config/mongo.config.js";

const { DB_ADMIN, DB_PASSWORD, DB_HOST } = mongoConfig;
const URL = `mongodb+srv://${DB_ADMIN}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`;

const mongoConnect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("db is connected");
  } catch (error) {
    console.log("Failed to connect to db", error);
  }
};

export default mongoConnect;
