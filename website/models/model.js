const mongoose = require('mongoose')


// Aqui é o que será inserido no DB em relação aos dados do cliente 
const clientModel = new mongoose.Schema({
    clientStruct :{
        type : String,
        required: true
    }

})

const client =  mongoose.model("Client", clientModel)

module.exports = client;