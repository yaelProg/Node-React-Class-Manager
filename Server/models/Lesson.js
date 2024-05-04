const mongoose = require('mongoose')
const Student = require("../models/Student")
const LessonSchema = new mongoose.Schema({
    teacherId: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    }
    // startTime: {
    //     type: String  
    // },
    ,
    duration: {
        type: Number,
        default: 45
    },
    endDate:{
        type: Date,
        //require: true
    },
    complete: {
        type:Boolean,
        default:false
    },
    title: {
        type: String,
        // default: `${Student.findById(this.studentId).firstName}`
        
    }

})

module.exports = mongoose.model('lesson', LessonSchema)