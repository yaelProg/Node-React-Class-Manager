const express = require("express")
const router = express.Router()
const verifyJWT = require("../middleware/verifyJWT")

const lessonController = require("../controllers/lessonController")

router.use(verifyJWT)

router.get("/",lessonController.getAllLessons)
router.get("/:id", lessonController.getLessonById)
router.get("/teacher/:teacherId", lessonController.getTeachersLessons)
router.post("/", lessonController.createNewLesson)
router.delete("/:id",lessonController.deleteLesson)
router.put("/",lessonController.updateLesson)
router.put("/complete/:id",lessonController.updateLessonComplete)
router.put("/student/:id", lessonController.updateLessonStudent)

module.exports = router