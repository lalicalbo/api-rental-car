import mongoose from "mongoose";

const schema = {
    id:Number,
    marca:String,
    puertas:Number,
    puestos:Number,
    maletas:Number,
    precio:Number
};

const Car = mongoose.model("Car", schema);

export default Car;