import {RequestHandler} from "express"
import {UserType, User} from "../models/User.js"
interface AuthController {
    renderRegisterPage: RequestHandler;
    handleRegister: RequestHandler
}

export const authController : AuthController = {
    renderRegisterPage(_ ,res) {
        res.render("register");
    },
    handleRegister(req, res) {
        const userData: UserType = req.body;

        const newUser = new User(userData);

        console.log(newUser);

        res.redirect('/application/done');
    }
}