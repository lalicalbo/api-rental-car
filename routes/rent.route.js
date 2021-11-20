import express  from "express";
import { rentCtrl } from "../controllers/index.js";


const routerQuotation=express.Router();


const rentRoutes={
    HOME:"/home",
    RENT:"/quotation",
};


routerQuotation.post(rentRoutes.RENT, rentCtrl.quotation);


export default routerQuotation;