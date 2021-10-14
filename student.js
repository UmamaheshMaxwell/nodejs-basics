const express = require("express")
const cors = require("cors")
const sql = require("mssql")
const app = express()
const router = express.Router()

const dbConfig = {
    user: 'sa',
    password: 'user@123',
    server: 'LAPTOP-GQVH23CD',
    database: 'StudentDB',
    options : {
        trustServerCertificate: true
    }
}


app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get("/", (req, res)=>{
    res.send(`My First Student API Connecting Database!!!`)
})

router.get("/student", (req, res)=>{
    sql.connect(dbConfig, (err)=>{
        if(err){
            console.log(err)
        } else {
            console.log('Successfully connected to SQL server')
        }

        // create request 
        const request = new sql.Request()

        request.query("SELECT TOP 100 * FROM Student", (err, data)=>{
            if(err){
               throw err
            }
            res.json(data.recordset)
        })
    })
})

router.post("/student", (req, res)=>{
    const {name, email, city} = req.body

    sql.connect(dbConfig, (err)=>{
        if(err){
            throw err
        } 

        // create request 
        const request = new sql.Request()
        const insertQuery = `INSERT INTO Student (name, email, city) VALUES ('${name}', '${email}', '${city}')`
        request.query(insertQuery, (err, data)=>{
            if(err){
               throw err
            }
            res.json(data)
        })
    })
})

app.use("/api", router)

const PORT = 5001

app.listen(PORT, ()=>{
    console.log(`Server listening at PORT ${PORT}`)
})
