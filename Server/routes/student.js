const express = require("express")
const router = express.Router()
const verifyJWT = require("../middleware/verifyJWT")

const studentController = require("../controllers/studentController")

router.use(verifyJWT)

router.get("/",studentController.getAllStudents)
router.get("/:id", studentController.getStudentById)
router.get("/birthday/:date", studentController.getStudentsBirthday)
router.post("/", studentController.createNewStudent)
router.delete("/:id",studentController.deleteStudent)
router.put("/",studentController.updateStudent)

module.exports = router

