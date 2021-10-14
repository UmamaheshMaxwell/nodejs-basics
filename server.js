const express = require("express")
const cors = require("cors")
const app = express()

const router = express.Router()

app.use(cors())

router.get("/", (req, res) =>{
    res.send(`Welcome to your first node API`)
})

router.get("/students", (req, res) =>{
    const students = [
        {
            id: 1,
            name:"Scott",
            age: 45,
            skill: 'C#'
        },
        {
            id: 2,
            name:"Adam",
            age: 43,
            skill: 'Python'
        },
        {
            id: 3,
            name:"Tuan",
            age: 42,
            skill: 'AI'
        },        {
            id: 4,
            name:"Uma",
            age: 39,
            skill: 'Javascript'
        }
    ]

    res.json(students)
})

const PORT = 5001

app.use("/api", router)

app.listen(PORT, ()=>{
    console.log(`Server listening at PORT ${PORT}`)
})