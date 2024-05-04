const User = require("../models/User")

const getAllUsers = async (req, res) => {
    if(req.user.roles!="headmaster"){
        return res.status(404).json({message: "page not found" })
    }
    const users = await User.find().lean()
    if(!users?.length)
        return res.status(400).json({message: 'No users found'})    
    res.json(users)
}

const getUserById = async (req, res) => {
    const {id} = req.params
    const user = await User.findById(id).lean()
    if(!user)
        return res.status(400).json({message: 'No user found'})
    res.json(user)
}

// const createNewUser = async (req, res) => {
//     if(req.user.roles!="headmaster"){
//         return res.status(404).json({message: "page not found" })
//     }
//     const {name, username, email, address, phone, roles} = req.body
//     if(!username)
//         return res.status(400).json({message: 'Username is required'})
//     const user = await User.create({name, username, email, address, phone, lessonsThisMonth, lessonsThisYear, roles})
//     if(user)
//         return res.status(201).json({message: 'New user created'})
//     else
//         return res.status(400).json({message: 'Invalid user'})
// } 

const updateUser = async (req, res) => {
    const {_id, firstName, lastName, username, email, address, phone, lessonsThisMonth, lessonsThisYear} = req.body
    if(!_id || !username)
        return res.status(400).json({message: 'Fields are required'})
    const user = await User.findById(_id).exec()
    if(!user)
        return res.status(400).json({message: 'User not found'})
    user.firstName = firstName
    user.lastName = lastName
    user.username = username
    user.email = email
    user.address = address
    user.phone = phone
    user.lessonsThisMonth = lessonsThisMonth
    user.lessonsThisYear = lessonsThisYear
    const updatedUser = await user.save()
    res.json(`'${updatedUser.username}' updated successfully`)
}

const updateUserLessons = async (req, res) => {
    if(req.user.roles!="headmaster"){
        return res.status(404).json({message: "page not found" })
    }
    const {id} = req.params
    const user = await User.findById(id).exec()
    if(!user)
        return res.status(400).json({message: 'User not found'})
    user.lessonsThisMonth = user.lessonsThisMonth + 1
    user.lessonsThisYear = user.lessonsThisYear + 1
    const updatedUser = await user.save()
    return res.json({message: `User '${updatedUser.username}' updated to number of lessons: this month- ${updatedUser.lessonsThisMonth}, this year- ${user.lessonsThisYear} successfully`})
}


const deleteUser = async (req, res) => {
    if(req.user.roles!="headmaster"){
        return res.status(404).json({message: "page not found" })
    }
    const {id} = req.params
    const user = await User.findById(id).exec()
    if(!user)
        return res.status(400).json({message: 'User not found'})
    const result = await User.deleteOne()
    const reply = `User: '${user.username}' ID: '${user.id}' deleted successfully`
    res.json(reply)
}

module.exports = {getAllUsers, getUserById,  updateUser, updateUserLessons, deleteUser}