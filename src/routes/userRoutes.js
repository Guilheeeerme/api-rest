import { Router } from "express";

import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = Router();

router.get("/", loginRequired, userController.index);
router.get("/:id", userController.show);

router.post("/", userController.create);

router.put("/", userController.update);
router.delete("/", userController.delete);

export default router;
