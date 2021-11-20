import mongoose from "mongoose";

const schema = {
    email: String,
    nombre: String,
    telefono: Number,
    id:Number
}

const User = mongoose.model("User", schema);

export default User;