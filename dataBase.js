import mongoose from "mongoose";

const dataBase = {
    connect: function () {
        //mongoose.connect('mongodb://localhost:27017/api_cars', {
            mongoose.connect('mongodb+srv://lalicalbo:Maruchos123@cars.u6quw.mongodb.net/test', {
            useNewUrlParser: true
        });
        mongoose.connection.on("error", function (e) { console.error(e); });
    }
}

export default dataBase;