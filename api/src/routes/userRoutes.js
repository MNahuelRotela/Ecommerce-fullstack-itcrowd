const { Router } = require("express");

const userAllCtrl = require("../controllers/user/usersAllCtrl.js");
const createUserCtrl = require("../controllers/user/createUserCtrl.js");
const deleteUserCtrl = require("../controllers/user/deleteUserCtrl.js");
const userByIdCtrl = require("../controllers/user/userByIdCtrl.js");
const updateUserCtrl = require("../controllers/user/updateUserCtrl.js");

const usersRouter = Router();

usersRouter.post("/", createUserCtrl);
usersRouter.get("/", userAllCtrl);
usersRouter.delete("/:id", deleteUserCtrl);
usersRouter.get("/:id", userByIdCtrl);
usersRouter.put("/:id", updateUserCtrl);

module.exports = usersRouter;