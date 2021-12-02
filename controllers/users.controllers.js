import dataBase from "../dataBase.js";
import { User } from "../models/index.js"


export const getAllUsers = (req, res) => {
    dataBase.connect();
    User.find((err, data) => {
        if (err) res.status(500).send(err);
        res.status(200).send(data);
    });
};


export const getOneUser = (req, res) => {
    dataBase.connect();
    const { id } = req.params
    User.findById(id, (err, data) => {
        if (err) res.status(404).send(err)
        res.status(200).json(data)
    });
};


export const createOneUser = (req, res) => {
    dataBase.connect();
    if (req.body) {
        User.create(req.body, (err, user) => {
            if (err) res.status(500).send(err)
            res.status(201).send(user)
        });
    };
};


export const updateUser = (req, res) => {
    const { id } = req.params
    const userToUpdate = req.body

    dataBase.connect();
    User.findById(id, (err, user) => {
        if (err) res.status(500).send(err)
        User.updateOne(user, userToUpdate, (err, userupdated) => {
            if (err) res.status(500).send(err)
            res.status(200).send(userupdated)
        });
    });
};


export const deleteUser = (req, res) => {
    const { id } = req.params;

    dataBase.connect();
    User.findById(id, (err, user) => {
        if (err) res.status(404).send(err);
        user.remove((err, value) => {
            if (err) res.status(500).send(err)
            res.send(value);
        });
    });
};


export const validateUser = (req, res) => {
    console.log("works validateAuth ")
    const { email, password } = req.body;

    if (email === undefined || password === undefined) {
        res.status(401).send()
    } else {
        dataBase.connect();
        const query = User.findOne({ 'email': email });

        query.exec(function (err, user) {
            if (err) res.status(500).send(err)
            if (user === null) res.status(401).send();
            if (user.password === password) res.status(200).send();
            res.status(401).send();
        });
    };
};