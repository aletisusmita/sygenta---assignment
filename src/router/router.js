const express = require ('express')
const router= express.Router()

const organizationController = require("../controller/controller.js")

 router
.post("/create",organizationController.createOrganization)

module.exports=router;