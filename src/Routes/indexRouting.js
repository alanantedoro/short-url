import { Router } from "express";
import shourURLRoute from "./shortURL.js";

const indexRouting = Router();

indexRouting.use("/short", shourURLRoute);

export default indexRouting;
