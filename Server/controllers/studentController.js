const Student = require("../models/Student")

const getAllStudents = async (req, res) => {
    // if(req.user.roles!="headmaster"){
    //     return res.status(404).json({message: "page not found" })
    // }
    const students = await Student.find().lean()
    if(!students?.length)
        return res.status(400).json({message: 'No students found'}) 
    return res.json(students)
}

const getStudentById = async (req, res) => {
    const {id} = req.params
    const student = await Student.findById(id).lean()
    if(!student)
        return res.status(400).json({message: 'No student found'})
    res.json(student)
}

const getStudentsBirthday = async (req, res) => {
    const {birthDate} = req.params
    const students = await Student.find({ birthDate }).lean()
    if(!students.length)
        return res.status(400).json({message: `No student's birthdays`}) 
    return res.json(students)
}

const createNewStudent = async (req, res) => {
    if(req.user.roles!="headmaster"){
        return res.status(404).json({message: "page not found" })
    }
    const {firstName, LastName, email, address, phone, fatherName, fatherPhone, motherName, motherPhone, grade, classNumber, birthDate, lessonsThisMonth, lessonsThisYear} = req.body
     if(!firstName||!LastName)
        return res.status(400).json({message: 'Fields are required'})
    const student = await Student.create({firstName, LastName, email, address, phone, fatherName, fatherPhone, motherName, motherPhone, grade, classNumber, birthDate, lessonsThisMonth, lessonsThisYear})
    if(student)
        return res.status(201).json({message: 'New student created'})
    else
        return res.status(400).json({message: 'Invalid student'})
}

const updateStudent = async (req, res) => {
    if(req.user.roles!="headmaster"){
        return res.status(404).json({message: "page not found" })
    }
    const {_id, firstName, LastName, email, address, phone, fatherName, fatherPhone, motherName, motherPhone, grade, classNumber, birthDate, lessonsThisMonth, lessonsThisYear} = req.body
    if(!_id)
        return req.status(400).json({message: 'Id is required'})
    const student = await Student.findById(_id).exec()
    if(!student)
        return res.status(400).json({message: 'Student not found'})
    student.firstName = firstName
    student.LastName = LastName
    student.email = email
    student.address = address
    student.phone = phone
    student.fatherName = fatherName
    student.fatherPhone = fatherPhone
    student.motherName = motherName
    student.motherPhone = motherPhone
    student.grade = grade
    student.classNumber = classNumber
    student.birthDate = birthDate
    student.lessonsThisMonth = lessonsThisMonth
    student.lessonsThisYear = lessonsThisYear
    const updatedStudent = await student.save()
    return res.json(`Student updated successfully`)
}

const deleteStudent = async (req, res) => {
    if(req.user.roles!="headmaster"){
        return res.status(404).json({message: "page not found" })
    }
    const {id} = req.params
    const student = await Student.findById(id).exec()
    if(!student)
        return res.status(400).json({message: 'Student not found'})
    const result = await student.deleteOne()
    const reply = `Student deleted successfully`
    res.json(reply)
}



module.exports = {getAllStudents, getStudentById, getStudentsBirthday, createNewStudent, updateStudent, deleteStudent}

