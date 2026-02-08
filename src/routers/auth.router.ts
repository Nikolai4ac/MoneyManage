import { Router } from "express";
import {authController} from "../controllers/auth.controller.js";
const authRouter = Router();

authRouter.get("/register", authController.renderRegisterPage);
authRouter.post("/register", authController.handleRegister);
// router.get("/login", authController.renderLogin);

export default authRouter;