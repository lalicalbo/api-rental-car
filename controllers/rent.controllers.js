import Car from "../models/cars.models.js";
import dataBase from "../dataBase.js"

export const quotation = (req, res) => {
    console.log("BODY", req.body)
    const { id, initial_date, end_date } = req.body

    dataBase.connect();
    Car.findById(id, (err, data) => {
        console.log("DATAAAAA", data)
        const { precio } = data
        if (err) res.status(400).send(err);


        let date1 = new Date(initial_date);
        let date2 = new Date(end_date);

        let Difference_In_Time = date2.getTime() - date1.getTime();
        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        let days = Difference_In_Days;

        const response = {
            initial_date: initial_date,
            end_date: end_date,
            total: (precio * days)
        }
        res.status(200).json(response);
        console.log("response", response)
    });

};