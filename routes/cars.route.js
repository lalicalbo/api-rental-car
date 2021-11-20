import express from "express";
import { carCtrl } from "../controllers/index.js";

const router = express.Router();

const carsRoutes={
    MAIN:"/api",
    GET:"/car",
    GET_ONE:"/car/:id",
    CREATE:"/car/create",
    UPDATE:"/car/update/:id",
    DELETE:"/car/delete/:id",
};

router.get(carsRoutes.MAIN)
router.get(carsRoutes.GET, carCtrl.getAllCars);
router.get(carsRoutes.GET_ONE, carCtrl.getOneCar);
router.post(carsRoutes.CREATE, carCtrl.createOneCar);
router.put(carsRoutes.UPDATE, carCtrl.updateCar);
router.delete(carsRoutes.DELETE, carCtrl.deleteCar);

export default router;



