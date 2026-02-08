import { Router } from "express";
import { renderIndex } from "../controllers/index.controller.js";
const indexRouter: Router = Router();

indexRouter.get("/", renderIndex.blankPage)

export default indexRouter