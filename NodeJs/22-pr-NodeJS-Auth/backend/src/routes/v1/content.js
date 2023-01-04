import express from "express";
import { isLoggedIn } from "../../../middleware.js";

const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
  console.log(req.headers);
  res.send({ message: "Getting data..." }).end();
});

export default router;
