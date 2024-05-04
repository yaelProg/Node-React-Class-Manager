require("dotenv").config()
const express = require("express")
const cors = require("cors")

const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")

const PORT = process.env.PORT || 7654
const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use('/api/lessons' ,require("./routes/lesson"))
app.use("/api/users", require("./routes/user"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/student", require("./routes/student") )
app.use("/api/functionToken/:token",require("./middleware/functionToken"))

app.get("/",(req, res)=>{
    res.send("This is the home page")
})

mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})
