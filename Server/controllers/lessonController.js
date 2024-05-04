const Lesson = require("../models/Lesson")

const getAllLessons = async (req, res) => {
    // if(req.user.roles!="headmaster"){
    //     return res.status(404).json({message: "page not found" })
    // }
    //להוציא מהערה כדי שיהיה מאובטח באמת
    const lessons = await Lesson.find().lean()
    if(!lessons?.length)
        return res.status(400).json({message: 'No lessons found'}) 
    return res.json(lessons)
}

const getTeachersLessons = async (req, res) => {
  
    const {teacherId} = req.params
    //const {date} = req.body
    const lessons = await Lesson.find({ teacherId }).lean()
    if(!lessons?.length)
       // return res.status(400).json({message: 'No lessons found for this teacher'}) 
        return res.send(null)
    return res.json(lessons)
}

const getLessonById = async (req, res) => {
    const {id} = req.params
    try{
    const lesson = await Lesson.findById(id).lean()
    if(!lesson)
        return res.status(400).json({message: 'Lesson not found'})
    return res.json(lesson)
    }
    catch{
        return res.status(400).json({message: 'No lesson found'})
    }    
}

const createNewLesson = async (req, res) => {

    const {teacherId, studentId, startDate, duration, complete, endDate, title} = req.body
    if(!studentId)
         return res.status(400).json({message: 'Student is required'})
    if(!teacherId)
         return res.status(400).json({message: 'Teacher is required'})
    const lesson = await Lesson.create({teacherId, studentId, startDate, 
         duration, complete, endDate, title})
    if(lesson)
        return res.status(201).json({message: 'New lesson created'})
    else
        return res.status(400).json({message: 'Invalid lesson'})
}

const updateLesson = async (req, res) => {
    if(req.user.roles!="headmaster"){
        return res.status(404).json({message: "page not found" })
    }
    const {_id, teacherId, studentId, startDate, duration, complete} = req.body
    if(!_id)
        return res.status(400).json({message: 'Id is required'})
    try{
    const lesson = await Lesson.findById(_id).exec()
    if(!lesson)
        return res.status(400).json({message: 'Lesson not found'})
    lesson.teacherId = teacherId
    lesson.studentId = studentId
    lesson.startDate = startDate
    lesson.duration = duration
    lesson.complete = complete
    const updatedLesson = await lesson.save()
    return res.json(`Lesson updated successfully`)
    }
    catch{
        return res.status(400).json({message: 'Lesson not found'})
    }    
}

const deleteLesson = async (req, res) => {
    if(req.user.roles!="headmaster"){
        return res.status(404).json({message: "page not found" })
    }
    const {id} = req.params
    const lesson = await Lesson.findById(id).exec()
    if(!lesson)
        return res.status(400).json({message: 'Lesson not found'})
    const result = await lesson.deleteOne()
    const reply = `Lesson deleted successfully`
    res.json(reply)
}

const updateLessonComplete = async (req, res) => {
    const {id} = req.params
    try{
    const lesson = await Lesson.findById(id).exec()
    if(!lesson)
        return res.status(400).json({message: 'Lesson not found'})
    lesson.complete = !lesson.complete
    const updatedLesson = await lesson.save()
    return res.json({message: `Lesson updated to completed: ${lesson.complete} successfully`})
    }
    catch{
        return res.status(400).json({message: 'Lesson not found'})
    }
}

const updateLessonStudent = async (req, res) => {
    const {id} = req.params
    const {studentId} = req.body
    const lesson = await Lesson.findById(id).exec()
    if(!lesson)
        return res.status(400).json({message: 'Lesson not found'})
    lesson.studentId = studentId
    const updatedLesson = await lesson.save()
    return res.json({message: `Lesson updated to student: ${lesson.studentId} successfully`})
}

module.exports = {getAllLessons, getTeachersLessons, getLessonById, createNewLesson, updateLesson, deleteLesson, updateLessonComplete, updateLessonStudent}

//הריאקט עושה את זה!!!!!!!!!! -לקבל שיעורים לפי תאריך למורה מסויים