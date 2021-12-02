import express from "express";
import { booksCtrl } from "../controllers/index.js";

const routerBooks = express.Router();

const bookRoutes={
    BOOK:"",   
};

routerBooks.post("", booksCtrl.createBooking);

export default routerBooks;