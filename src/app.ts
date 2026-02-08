import "dotenv/config"
import express, {Application} from "express";
import { startServer } from "./server.js";
import { PORT } from "./config/server.config.js";
import {join} from "path";
import bodyParser from "body-parser";
const app: Application = express();
const __dirname: string = import.meta.dirname;

// Set view engine and views
app.set("view engine", "ejs")
app.set ("views", "public/views")
app.use(express.static(join(__dirname, "../public")))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// Import routers
import indexRouter from "./routers/index.router.js";
import authRouter from "./routers/auth.router.js";
// Mount Routers
app.use('/', indexRouter);
app.use('/application', authRouter)
startServer(app, PORT);

