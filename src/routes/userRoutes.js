import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", userController.store);
router.put("/:id", loginRequired, userController.update);
router.delete("/:id", loginRequired, userController.delete);

export default router;
