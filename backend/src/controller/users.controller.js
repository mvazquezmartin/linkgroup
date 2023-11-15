import { Router } from "express";
import HTTP_STATUS from "../constant/HTTP_STATUS";

const router = Router();

router.post("/register", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

export default router;
