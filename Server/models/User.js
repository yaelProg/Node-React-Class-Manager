const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username:{
        type:mongoose.Schema.Types.String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:mongoose.Schema.Types.String,
        enum: ["teacher", "headmaster"],
        default: "teacher"
    },
    firstName:{
        type:mongoose.Schema.Types.String,
        require: true
    },
    lastName:{
        type:mongoose.Schema.Types.String, 
        require: true
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
    lessonsThisMonth:{
        type:Number,
        default:0,
    },
    lessonsThisYear:{
        type:Number,
        default:0,
    }
})

module.exports = mongoose.model('user', UserSchema)