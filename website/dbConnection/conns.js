const mongoose = require("mongoose")

mongoose.connect().then(()=> {
    console.log("Connection sucessful")
}).catch((err) => {
    console.log("Error : ")
    console.log(err)
})