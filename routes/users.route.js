import express from "express";
import { usersCtrl } from "../controllers/index.js";


const routerUsers = express.Router();


const userRoutes ={
    MAIN:"/use",
    GET:"/user",
    GET_ONE:"/user/:id",
    CREATE:"/user/create",
    UPDATE:"/user/update/:id",
    DELETE:"/user/delete/:id",

}

routerUsers.get(userRoutes.MAIN)
routerUsers.get(userRoutes.GET, usersCtrl.getAllUsers);
routerUsers.get(userRoutes.GET_ONE, usersCtrl.getOneUser);
routerUsers.post(userRoutes.CREATE, usersCtrl.createOneUser);
routerUsers.put(userRoutes.UPDATE, usersCtrl.updateUser);
routerUsers.delete(userRoutes.DELETE, usersCtrl.deleteUser);



export default routerUsers;