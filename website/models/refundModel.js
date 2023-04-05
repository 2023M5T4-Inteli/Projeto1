const mongoose = require('mongoose')


// Estrutura de dados que sera recebida no bd para poder pedir um reembolso 
const refundModel = new mongoose.Schema({
    refundImei : {
        type : String,
        required : true 
    },
    refundPercentage : {
        type: Number,
        required : true
    },
    refundReason : {
        type : String,
        required : true
    }, 
    refundAdress:{
        type : String,
        required : true
    }
})


// Aqui é feito a requisão para criar uma nova collection no banco de dados 
const refund = mongoose.model("Refund", refundModel)

module.exports = refund