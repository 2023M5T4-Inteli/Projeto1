const mongoose = require('mongoose')


// Estrutura de dados que sera recebida no bd para poder pedir um reembolso 
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


// Aqui é feito a requisão para criar uma nova collection no banco de dados 
const client =  mongoose.model("Client", clientModel)

// Sempre que criar um model se atentar em exportar os mesmos separadamente 
module.exports = client
