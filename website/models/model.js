const mongoose = require('mongoose')

const clientModel = new mongoose.Schema({
    client :{
        type : String
    }

})

const client = new mongoose.model("Client", clientModel)

module.exports = client;