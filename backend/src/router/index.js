import usersController from "../controller/users.controller";
import rrssController from "../controller/rrss.controller";

const router = (app) => {
  app.use("/api/users", usersController);
  app.use("/api/rrss", rrssController);
};

export default router;
