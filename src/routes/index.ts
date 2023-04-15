import { Router } from "express";
import HomeController from "../controllers/index"
const router = Router();

router.get('/',HomeController.index)



export default router;

