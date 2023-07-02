import { Router } from "express";
import shorter from "../Middlewares/shorter.js";
import shorterController from "../Controllers/shorterController.js";

const shortController = new shorterController();
const shourURLRoute = Router();

// shourURLRoute.get("/id", shortController.getByID);

shourURLRoute.post("/", shorter, shortController.addNew);

// shourURLRoute.put("/id", shortController.editByID);

// shourURLRoute.delete("/id", shortController.deleteByID);

export default shourURLRoute;
