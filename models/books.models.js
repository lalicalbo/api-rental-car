import mongoose from "mongoose";

const schema = {
    id_car:String,
    email: String,
    nombre: String,
    telefono: Number,
    initial_date:String,
    end_date:String,
    days:Number   
};

const Books = mongoose.model("Books", schema);

export default Books;

