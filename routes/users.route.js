import express from "express";
import { usersCtrl } from "../controllers/index.js";


const routerUsers = express.Router();


const userRoutes ={
    GET:"",
    GET_ONE:"/:id",
    CREATE:"/create",
    UPDATE:"/update/:id",
    DELETE:"/delete/:id",
};

routerUsers.get(userRoutes.GET, usersCtrl.getAllUsers);
routerUsers.get(userRoutes.GET_ONE, usersCtrl.getOneUser);
routerUsers.post(userRoutes.CREATE, usersCtrl.createOneUser);
routerUsers.put(userRoutes.UPDATE, usersCtrl.updateUser);
routerUsers.delete(userRoutes.DELETE, usersCtrl.deleteUser);


export default routerUsers;