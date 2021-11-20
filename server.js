console.log("********API CAR**********");

import express from "express";

import { router, routerQuotation, routerUsers} from "./routes/index.js";
console.log("SERVER WORKING")

//creating app
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Main page BUGGY Y BUMPER,INC")

});

app.use("/api", router);
app.use("/home", routerQuotation);
app.use("/use", routerUsers);

const PORT = process.env.PORT || 5000
//lauch server
app.listen(PORT, () => {
    console.log("inizializing server")
});