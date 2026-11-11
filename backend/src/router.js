import Router from "express";
import Controller from "./controller.js";

const router = Router();
const controller = new Controller();

router.get("/",  controller.getData);
 
export default router;