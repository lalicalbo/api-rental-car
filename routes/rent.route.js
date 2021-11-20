import express  from "express";
import { rentCtrl } from "../controllers/index.js";


const routerQuotation=express.Router();


const rentRoutes={
    RENT:"",
    QUOTE:"/quote",
};


routerQuotation.post(rentRoutes.QUOTE, rentCtrl.quotation);


export default routerQuotation;