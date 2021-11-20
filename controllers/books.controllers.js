import mongoose from "mongoose";
import dataBase from "../dataBase.js";
import { Books } from "../models/index.js";
import days_number from "../utils/date.js";


export const createBooking = (req, res) => {
    console.log("req", req.body)
    if(req.body.id_car==null || req.body.nombre==null){
        const message ={
            message:"The body is not valid"
        }
        res.status(400).send(message);
    }
    else{
    const { initial_date, end_date } = req.body
    const days = days_number(initial_date, end_date);
    console.log(days)
    const booking = {
        days: days,
        ...req.body
    }
    dataBase.connect();
    Books.create(booking, (err, book) => {
        if (err) res.status(500).send(err);
        res.status(201).json(book);
    });
}
}
