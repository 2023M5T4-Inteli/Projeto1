require("./dbConnection/conns")

const express = require('express')
const app = express()
const port = process.env.PORT || 8000 
const clientRoute = require("./routes/route")

app.use(express.json())
app.use(clientRoute)



app.listen(port, ()=> {
    console.log("Server online at :", {port})
})