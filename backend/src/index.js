import express from "express";
import appConfig from "../config/appConfig.js";

const app = express();
const PORT = appConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});