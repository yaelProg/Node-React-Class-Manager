const bcrypt = require("bcrypt") 
const User = require("../models/User")
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const {username, password} = req.body

    if (!username || !password) {
        return res.status(400).json({message: `All fields are required`})
    }

    const foundUser = await User.findOne({username}).lean()
    if(!foundUser) {
        return res.status(401).json({message: `Unauthorized`})
    }

    const match = await bcrypt.compare(password, foundUser.password)

    if (!match) {
        return res.status(401).json({message: `Unauthorized`})
    }

    //res.send("Logged in")

    const userInfo = {_id: foundUser._id, firstName:foundUser.firstName, lastName: foundUser.lastName, roles: foundUser.roles, username:foundUser.username, email:foundUser.email}

    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)

    res.json({accessToken, role:userInfo.roles})
}

const register = async (req, res)=>{
    // if(req.user.roles!="headmaster"){
    //  return res.status(404).json({message: "page not found" })
    //  }
   
    const {generalPassword, username, password, firstName, lastName, email, phone, roles} = req.body

    const match = await bcrypt.compare(generalPassword, process.env.GENERAL_PASSWORD )

    if (!match) {
        return res.status(401).json({message: `Not allowed to register without permission password`})
    }
    if(!firstName || !lastName|| !username || !password) {
        return res.status(400).json({message: 'Required fields are missimg'})
    }

    const duplicate = await User.findOne({username:username}).lean()
    if(duplicate){
        return res.status(409).json({message: 'Username exists'})
    }
    if(roles!=undefined&&roles!="teacher"&&roles!="headmaster")
    {
        return res.status(400).json({message: 'Invalid role'})
    }

    const hashedPwd = await bcrypt.hash(password, 10)
  
    const userObject = {firstName, lastName, email, username, phone, password:hashedPwd, roles}

    const user = await User.create(userObject)
    if(user) {
        return res.status(201).json({message: `New user ${user.username} created`})
    } else {
        return res.status(400).json({message: `invalid user received`})
    }
}


module.exports = {login, register}