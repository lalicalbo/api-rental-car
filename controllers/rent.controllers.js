import Car from "../models/cars.models.js";
import dataBase from "../dataBase.js";
import days_number from "../utils/date.js";


export const quotation = (req, res) => {
    const { id_car, initial_date, end_date } = req.body

    dataBase.connect();
    Car.findById(id_car, (err, data) => {
        const { precio } = data
        if (err) res.status(400).send(err);
        const days = days_number(initial_date, end_date);
        const response = {
            initial_date: initial_date,
            end_date: end_date,
            days: days,
            total: (precio * days)
        };
        res.status(200).json(response);
        console.log("response", response)
    });
};