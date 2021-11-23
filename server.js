console.log("********API CAR**********");

import express from "express";
import cors from "cors";

import { router, routerQuotation, routerUsers,routerBooks} from "./routes/index.js";
console.log("SERVER WORKING")

//creating app
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Main page BUGGY Y BUMPER,INC")

});

app.use("/api/car", router);
app.use("/api/rental", routerQuotation);
app.use("/api/user", routerUsers);
app.use("/api/booking", routerBooks);

const PORT = process.env.PORT || 3007
//lauch server
app.listen(PORT, () => {
    console.log("inizializing server")
});