const mongoose = require("mongoose")

const organizationSchema = new mongoose.Schema({

    organization:{

        property:{
            type:String,
            required:true,
            trim:true
        },
        region : {
            type:String,
            required:true,
            trim:true
        },
        field:{
            crops:{
                type:String,
                required:true,
                trim:true
            },
            crops1:{
                type:String,
                required:true,
                trim:true
            },
            crops2:{
                type:String,
                required:true,
                trim:true
            }

        }

    }

},
{timestamps:true}
)


module.exports=mongoose.model ('organization',organizationSchema) 