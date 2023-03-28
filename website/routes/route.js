 const express = require("express")
 const client = require("./../models/model")
 
const router = express.Router();

// Rota de post no backend 

router.post("/cadastroCliente", async (req,res) => {
    console.log(req.body)
    const data = new client(req.body)
    const result = await data

    if(!result){
        console.log("Post failed")
    }
    else{}
})

module.export = router 