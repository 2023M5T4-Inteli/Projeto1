const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const port =  3001

const clientModel = require("./models/model")
const app = express()

app.use(express.json())
app.use(cors())


// Colocar essa string no .env 
mongoose.connect("mongodb+srv://eduPorto:Am544Wms2dGxkqPr@cluster0.unk5tdj.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.listen(port, ()=> {
    console.log("Server online at :", {port})
})

// Rota para inserir algo no BD
app.post ('/insertData', async (req, res) => {

    const walletUserAdress = req.body
    const clientData = new clientModel ( walletUserAdress);
    try{
        await clientData.save();
        console.log(clientData)
        res.send("Data inserted")
    } catch(error){
        console.log(error)
    }
})


app.get("/getData", async (req, res) => {
    try {
      const dataUserFull = await clientModel.find({ });
      res.send(dataUserFull);
      console.log(dataUserFull);
    } catch (err) {
      console.log(err);
    }
  });