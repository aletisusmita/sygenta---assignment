const models = require("../models/models.js")

const createOrganization = async function(req,res){
    try{
        const data = req.body

        let organization = data

        if(!organization)
            return res.status(400).send({status:false,message:"must required organization"})
        

       let saveData=await models.create(data)   
       return res.status(201).send({status:true,msg:saveData}) 

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = {createOrganization}