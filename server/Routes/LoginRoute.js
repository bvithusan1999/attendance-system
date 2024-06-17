import express from "express";
import { login } from "../Controllers/LoginController.js";
import loginMiddleware from "../MiddleWare/LoginMiddleWare.js";

const router = express.Router();

router.post("/", loginMiddleware, login);

export default router;
