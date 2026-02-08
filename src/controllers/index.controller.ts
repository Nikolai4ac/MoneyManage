import {RequestHandler} from "express"

interface indexController {
    blankPage: RequestHandler;
}

export const renderIndex : indexController = {
    blankPage(_ ,res) {
        res.render("index");
    }
}