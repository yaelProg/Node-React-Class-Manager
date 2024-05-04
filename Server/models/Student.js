const mongoose = require('mongoose')
const StudentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:String
    }, 
    fatherName: {
        type: String
    },
    fatherPhone: {
        type: String
    },
    motherName: {
        type: String
    },
    motherPhone: {
        type: String
    },
    class:{
        type:Number,
    },
    classNumber:{
        type:Number,
    },
    birthDate:{
        type:Date,
    },
    lessonsThisMonth:{
        type:Number,
        default:0,
    },
    lessonsThisYear:{
        type:Number,
        default:0,
    }
})

module.exports = mongoose.model('student', StudentSchema)