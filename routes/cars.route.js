import express from "express";
import { carCtrl } from "../controllers/index.js";

const router = express.Router();

const carsRoutes={
    GET:"",
    GET_ONE:"/:id",
    CREATE:"/create",
    UPDATE:"/update/:id",
    DELETE:"/delete/:id",
};

router.get(carsRoutes.GET, carCtrl.getAllCars);
router.get(carsRoutes.GET_ONE, carCtrl.getOneCar);
router.post(carsRoutes.CREATE, carCtrl.createOneCar);
router.put(carsRoutes.UPDATE, carCtrl.updateCar);
router.delete(carsRoutes.DELETE, carCtrl.deleteCar);

export default router;



