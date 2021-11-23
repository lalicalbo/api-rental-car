import mongoose from "mongoose";
import dataBase from "../dataBase.js";
import { Car } from "../models/index.js";


export const getAllCars = (req, res) => {
    dataBase.connect();
    Car.find((err, data) => {
        if (err) res.status(500).send(err);
        res.status(200).send(data);

    })
};


export const getOneCar = (req, res) => {
    dataBase.connect();
    const { id } = req.params;

    Car.findById(id, (err, data) => {
        if (err) res.status(404).send(err);
        res.status(200).json(data);
        if(data){
            console.log("data",data)
        }

    });
};


export const createOneCar = (req, res) => {
    console.log("it works...")
    console.log("BODY", req.body)
    dataBase.connect();
    if (req.body) {
        Car.create(req.body, (err, car) => {
            if (err) res.status(500).send(err);
            res.status(201).json(car);
        });
    };
};

export const updateCar = (req, res) => {
    console.log("works put")
    const { id } = req.params
    const carToUpdate = req.body

    dataBase.connect();
    Car.findById(id, (err, car) => {
        if (err) res.status(500).send(err);
        Car.updateOne(car, carToUpdate, (err, carUpdated) => {
            if (err) res.status(500).send();
            res.status(200).send(carUpdated);
        });
    });
};


export const deleteCar = (req, res) => {
    console.log("it woks delete")
    const { id } = req.params;

    dataBase.connect();
    Car.findById(id, (err, car) => {
        if (err) res.status(404).send(err);
        car.remove((err, value) => {
            if (err) res.status(500).send(err);
            res.send(value);

        });
    });
};


