const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const verifyJWT = require("../middleware/verifyJWT")

router.use(verifyJWT)
router.get("/",userController.getAllUsers)
router.get("/:id", userController.getUserById)
//router.post("/", userController.createNewUser)
router.delete("/:id",userController.deleteUser)
router.put("/",userController.updateUser)
router.put("/:id",userController.updateUserLessons)

module.exports = router