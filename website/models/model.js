const mongoose = require('mongoose')


// Aqui é o que será inserido no DB em relação aos dados do cliente 
const clientModel = new mongoose.Schema({
    clientAdresss :{
        type : String,
        required: true
    },
    clientImei:{
        type : String,
        required : true
    },
    clientCellValue:{
        type : Number,
        required : true
    }
})

const client =  mongoose.model("Client", clientModel)

module.exports = client;