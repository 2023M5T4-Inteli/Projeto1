const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const port =  3001

const clientModel = require("./models/model")
const refundModel = require("./models/refundModel")

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

// Rota para inserir algo no BD na collection de clientes 

app.post('/insert', async (req,res) => {
    // Ficar atento ao requisitar o objeto correto do frontend 
    const userFinalAdress = req.body.clientAddress
    const userIMEI = req.body.clientImei
    const userCellValue = req.body.clientFundsValue
    const testeInput = new clientModel({clientAdresss : userFinalAdress, clientImei : userIMEI, clientCellValue : userCellValue })
    try{
        await testeInput.save()
        res.send("Input worked")
    } catch (err){
        console.log(err)
    }
})


// Rota para pegar dados no BD da collection de clientes 

app.get("/getData", async (req, res) => {
    try {
      const dataUserFull = await clientModel.find({ });
      res.send(dataUserFull);
      console.log(dataUserFull);
    } catch (err) {
      console.log(err);
    }
  });


// Rota para inserir algo no BD na collection de reembolso  
app.post('/insertRefund', async (req,res) => {
    const imeiToRefund = req.body.refundImei
    const percentageToRefund = req.body.refundPercentage
    const reasonToRefund = req.body.refundReason


    const testeInput2 = new refundModel({refundImei : imeiToRefund, refundPercentage : percentageToRefund, refundReason : reasonToRefund })
    try{
        await testeInput2.save()
        res.send("Input worked")
    } catch (err){
        console.log(err)
    }
})


